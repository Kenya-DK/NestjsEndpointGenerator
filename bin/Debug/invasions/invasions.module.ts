import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InvasionsController } from './Invasions.controller';
import { InvasionsService } from './Invasions.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [InvasionsController],
  providers: [InvasionsService, PrismaService],
  exports: [InvasionsService],
})
export class InvasionsModule { }