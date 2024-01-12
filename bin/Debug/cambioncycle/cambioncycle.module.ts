import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CambioncycleController } from './Cambioncycle.controller';
import { CambioncycleService } from './Cambioncycle.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [CambioncycleController],
  providers: [CambioncycleService, PrismaService],
  exports: [CambioncycleService],
})
export class CambioncycleModule { }