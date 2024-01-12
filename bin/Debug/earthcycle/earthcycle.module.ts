import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EarthcycleController } from './Earthcycle.controller';
import { EarthcycleService } from './Earthcycle.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [EarthcycleController],
  providers: [EarthcycleService, PrismaService],
  exports: [EarthcycleService],
})
export class EarthcycleModule { }