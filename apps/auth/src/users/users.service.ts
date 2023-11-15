import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcryptjs';
import { GetUserDTO } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  async getUser(data: GetUserDTO) {
    try {
      return this.userRepository.findOne(data);
    } catch (error) {
      throw error;
    }
  }
  async validateUser(email: string, password: string) {
    try {
      const user = await this.userRepository.findOne({ email });
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(createUserDto: CreateUserDTO) {
    try {
      await this.validateCreateUserDto(createUserDto);
      return this.userRepository.create({
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      });
    } catch (error) {
      throw error;
    }
  }
  async validateCreateUserDto(creatUserDto: CreateUserDTO) {
    try {
      await this.userRepository.findOne({ email: creatUserDto.email });
    } catch (error) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists');
  }
  constructor(private readonly userRepository: UsersRepository) {}
}
