import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SentientoutpostsController } from './Sentientoutposts.controller';
import { SentientoutpostsService } from './Sentientoutposts.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [SentientoutpostsController],
  providers: [SentientoutpostsService, PrismaService],
  exports: [SentientoutpostsService],
})
export class SentientoutpostsModule { }