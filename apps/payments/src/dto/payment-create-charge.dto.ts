import { CreateChargeDTO } from '@app/common';
import { IsEmail } from 'class-validator';

export class PaymentCreateChargeDTO extends CreateChargeDTO {
  @IsEmail()
  email: string;
}
