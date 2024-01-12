import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NightwaveController } from './Nightwave.controller';
import { NightwaveService } from './Nightwave.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [NightwaveController],
  providers: [NightwaveService, PrismaService],
  exports: [NightwaveService],
})
export class NightwaveModule { }