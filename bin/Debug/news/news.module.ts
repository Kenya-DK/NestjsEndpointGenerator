import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsController } from './News.controller';
import { NewsService } from './News.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [NewsController],
  providers: [NewsService, PrismaService],
  exports: [NewsService],
})
export class NewsModule { }