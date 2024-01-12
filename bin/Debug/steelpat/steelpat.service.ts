import { Injectable, OnModuleInit } from '@nestjs/common';
import { LogService } from '../logs/log.service';
@Injectable()
export class SteelpatService implements OnModuleInit {
  constructor(
    private readonly logService: LogService,
  ) { this.logService.setContext(SteelpatService.name); }

  onModuleInit() { }
}