import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RivensController } from './Rivens.controller';
import { RivensService } from './Rivens.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [RivensController],
  providers: [RivensService, PrismaService],
  exports: [RivensService],
})
export class RivensModule { }