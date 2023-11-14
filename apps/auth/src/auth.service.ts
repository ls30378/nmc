import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UserDocument } from './users/models/user.schema';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  async login(
    user: UserDocument,
    response: Response<any, Record<string, any>>,
  ) {
    try {
      const tokenPayload = {
        userId: user._id.toHexString(),
      };
      const expires = new Date();
      expires.setSeconds(
        expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
      );
      const token = this.jwtService.sign(tokenPayload);
      response.cookie('Authentication', token, { httpOnly: true, expires });
    } catch (error) {}
  }
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
}
