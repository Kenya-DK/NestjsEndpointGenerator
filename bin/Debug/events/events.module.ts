import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsController } from './Events.controller';
import { EventsService } from './Events.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [EventsController],
  providers: [EventsService, PrismaService],
  exports: [EventsService],
})
export class EventsModule { }