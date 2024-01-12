import { Injectable, OnModuleInit } from '@nestjs/common';
import { LogService } from '../logs/log.service';
@Injectable()
export class PersistentenemiesService implements OnModuleInit {
  constructor(
    private readonly logService: LogService,
  ) { this.logService.setContext(PersistentenemiesService.name); }

  onModuleInit() { }
}