import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDTO) {
    try {
      return createUserDto;
    } catch (error) {
      throw error;
    }
  }
}
