import { Injectable, OnModuleInit } from '@nestjs/common';
import { LogService } from '../logs/log.service';
@Injectable()
export class ConclavechallengesService implements OnModuleInit {
  constructor(
    private readonly logService: LogService,
  ) { this.logService.setContext(ConclavechallengesService.name); }

  onModuleInit() { }
}