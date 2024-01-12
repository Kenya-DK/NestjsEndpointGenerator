import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SortieController } from './Sortie.controller';
import { SortieService } from './Sortie.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [SortieController],
  providers: [SortieService, PrismaService],
  exports: [SortieService],
})
export class SortieModule { }