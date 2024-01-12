import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SteelpatController } from './Steelpat.controller';
import { SteelpatService } from './Steelpat.service';
import { PrismaService } from '$/services';
import { LogModule } from '../logs/log.module';
@Module({
  imports: [ConfigModule, LogModule],
  controllers: [SteelpatController],
  providers: [SteelpatService, PrismaService],
  exports: [SteelpatService],
})
export class SteelpatModule { }