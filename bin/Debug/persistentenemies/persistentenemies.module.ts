import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistentenemiesController } from './Persistentenemies.controller';
import { PersistentenemiesService } from './Persistentenemies.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [PersistentenemiesController],
  providers: [PersistentenemiesService, PrismaService],
  exports: [PersistentenemiesService],
})
export class PersistentenemiesModule { }