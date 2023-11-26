import { Injectable } from '@nestjs/common';
import { NotifyEmailDTO } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  notifyEmail(data: NotifyEmailDTO) {
    console.log(data.email);
  }
}
