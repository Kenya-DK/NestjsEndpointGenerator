import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FissuresController } from './Fissures.controller';
import { FissuresService } from './Fissures.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [FissuresController],
  providers: [FissuresService, PrismaService],
  exports: [FissuresService],
})
export class FissuresModule { }