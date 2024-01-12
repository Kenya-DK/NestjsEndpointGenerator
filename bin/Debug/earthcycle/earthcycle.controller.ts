import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EarthcycleService } from './Earthcycle.service';
@ApiTags("Earthcycle")
@Controller()
export class EarthcycleController {
  constructor(private readonly _earthcycleService: EarthcycleService) { }

}