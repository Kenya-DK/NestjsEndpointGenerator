import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InvasionsService } from './Invasions.service';
@ApiTags("Invasions")
@Controller()
export class InvasionsController {
  constructor(private readonly _invasionsService: InvasionsService) { }

}