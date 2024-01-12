import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GlobalupgradesService } from './Globalupgrades.service';
@ApiTags("Globalupgrades")
@Controller()
export class GlobalupgradesController {
  constructor(private readonly _globalupgradesService: GlobalupgradesService) { }

}