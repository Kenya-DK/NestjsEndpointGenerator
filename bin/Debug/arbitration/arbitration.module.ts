import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArbitrationController } from './Arbitration.controller';
import { ArbitrationService } from './Arbitration.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [ArbitrationController],
  providers: [ArbitrationService, PrismaService],
  exports: [ArbitrationService],
})
export class ArbitrationModule { }