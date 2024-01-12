import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConclavechallengesController } from './Conclavechallenges.controller';
import { ConclavechallengesService } from './Conclavechallenges.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [ConclavechallengesController],
  providers: [ConclavechallengesService, PrismaService],
  exports: [ConclavechallengesService],
})
export class ConclavechallengesModule { }