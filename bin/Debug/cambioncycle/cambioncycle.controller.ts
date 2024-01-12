import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CambioncycleService } from './Cambioncycle.service';
@ApiTags("Cambioncycle")
@Controller()
export class CambioncycleController {
  constructor(private readonly _cambioncycleService: CambioncycleService) { }

}