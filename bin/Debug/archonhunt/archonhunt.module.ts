import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArchonhuntController } from './Archonhunt.controller';
import { ArchonhuntService } from './Archonhunt.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [ArchonhuntController],
  providers: [ArchonhuntService, PrismaService],
  exports: [ArchonhuntService],
})
export class ArchonhuntModule { }