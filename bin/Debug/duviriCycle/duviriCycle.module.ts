import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DuviriCycleController } from './DuviriCycle.controller';
import { DuviriCycleService } from './DuviriCycle.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [DuviriCycleController],
  providers: [DuviriCycleService, PrismaService],
  exports: [DuviriCycleService],
})
export class DuviriCycleModule { }