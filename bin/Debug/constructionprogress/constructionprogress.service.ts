import { Injectable, OnModuleInit } from '@nestjs/common';
import { LogService } from '../logs/log.service';
@Injectable()
export class ConstructionprogressService implements OnModuleInit {
  constructor(
    private readonly logService: LogService,
  ) { this.logService.setContext(ConstructionprogressService.name); }

  onModuleInit() { }
}