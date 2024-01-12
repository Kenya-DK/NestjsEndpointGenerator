import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AlertsController } from './Alerts.controller';
import { AlertsService } from './Alerts.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [AlertsController],
  providers: [AlertsService, PrismaService],
  exports: [AlertsService],
})
export class AlertsModule { }