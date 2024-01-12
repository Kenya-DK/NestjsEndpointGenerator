import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlashsalesController } from './Flashsales.controller';
import { FlashsalesService } from './Flashsales.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [FlashsalesController],
  providers: [FlashsalesService, PrismaService],
  exports: [FlashsalesService],
})
export class FlashsalesModule { }