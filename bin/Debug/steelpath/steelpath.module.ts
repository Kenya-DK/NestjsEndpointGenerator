import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SteelpathController } from './Steelpath.controller';
import { SteelpathService } from './Steelpath.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [SteelpathController],
  providers: [SteelpathService, PrismaService],
  exports: [SteelpathService],
})
export class SteelpathModule { }