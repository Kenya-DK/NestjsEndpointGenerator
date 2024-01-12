import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DuviriCycleService } from './DuviriCycle.service';
@ApiTags("DuviriCycle")
@Controller()
export class DuviriCycleController {
  constructor(private readonly _duviriCycleService: DuviriCycleService) { }

}