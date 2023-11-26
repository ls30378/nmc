import { IsEmail } from 'class-validator';

export class NotifyEmailDTO {
  @IsEmail()
  email: string;
}
