import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CetuscycleController } from './Cetuscycle.controller';
import { CetuscycleService } from './Cetuscycle.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [CetuscycleController],
  providers: [CetuscycleService, PrismaService],
  exports: [CetuscycleService],
})
export class CetuscycleModule { }