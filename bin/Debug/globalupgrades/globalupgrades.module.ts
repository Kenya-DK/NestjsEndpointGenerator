import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalupgradesController } from './Globalupgrades.controller';
import { GlobalupgradesService } from './Globalupgrades.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [GlobalupgradesController],
  providers: [GlobalupgradesService, PrismaService],
  exports: [GlobalupgradesService],
})
export class GlobalupgradesModule { }