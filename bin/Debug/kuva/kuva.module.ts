import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KuvaController } from './Kuva.controller';
import { KuvaService } from './Kuva.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [KuvaController],
  providers: [KuvaService, PrismaService],
  exports: [KuvaService],
})
export class KuvaModule { }