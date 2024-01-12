import { Injectable, OnModuleInit } from '@nestjs/common';
import { LogService } from '../logs/log.service';
@Injectable()
export class [NAME]Service implements OnModuleInit {
  constructor(
    private readonly logService: LogService,
  ) { this.logService.setContext([NAME]Service.name); }

  onModuleInit() { }
}