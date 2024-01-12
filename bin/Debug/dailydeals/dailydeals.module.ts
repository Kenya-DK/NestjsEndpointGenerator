import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DailydealsController } from './Dailydeals.controller';
import { DailydealsService } from './Dailydeals.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [DailydealsController],
  providers: [DailydealsService, PrismaService],
  exports: [DailydealsService],
})
export class DailydealsModule { }