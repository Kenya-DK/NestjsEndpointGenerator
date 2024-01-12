import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SimarisController } from './Simaris.controller';
import { SimarisService } from './Simaris.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [SimarisController],
  providers: [SimarisService, PrismaService],
  exports: [SimarisService],
})
export class SimarisModule { }