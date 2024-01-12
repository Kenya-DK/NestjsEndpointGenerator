import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DailydealsService } from './Dailydeals.service';
@ApiTags("Dailydeals")
@Controller()
export class DailydealsController {
  constructor(private readonly _dailydealsService: DailydealsService) { }

}