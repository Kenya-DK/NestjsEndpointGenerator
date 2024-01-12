import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConstructionprogressController } from './Constructionprogress.controller';
import { ConstructionprogressService } from './Constructionprogress.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [ConstructionprogressController],
  providers: [ConstructionprogressService, PrismaService],
  exports: [ConstructionprogressService],
})
export class ConstructionprogressModule { }