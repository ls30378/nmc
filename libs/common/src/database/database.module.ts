import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://monguser:mongpass@mongodb:27017/sleepr'),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get('MONGODB_URI'),
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
})
export class DatabaseModule {}
