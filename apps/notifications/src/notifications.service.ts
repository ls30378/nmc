import { Injectable } from '@nestjs/common';
import { NotifyEmailDTO } from './dto/notify-email.dto';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationsService {
  constructor(private readonly configService: ConfigService) {}

  private readonly transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: this.configService.get('MAIL_USER'),
      pass: this.configService.get('MAIL_PASSWORD'),
    },
  });

  async notifyEmail(data: NotifyEmailDTO) {
    await this.transporter.sendMail({
      from: this.configService.get('MAIL_USER'),
      to: data.email,
      subject: 'Notification',
      text: 'text',
    });
  }
}
