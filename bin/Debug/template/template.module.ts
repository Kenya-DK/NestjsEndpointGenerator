import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { [NAME]Controller } from './[NAME].controller';
import { [NAME]Service } from './[NAME].service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [[NAME]Controller],
  providers: [[NAME]Service, PrismaService],
  exports: [[NAME]Service],
})
export class [NAME]Module { }