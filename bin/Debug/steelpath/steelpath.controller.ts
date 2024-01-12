import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SteelpathService } from './Steelpath.service';
@ApiTags("Steelpath")
@Controller()
export class SteelpathController {
  constructor(private readonly _steelpathService: SteelpathService) { }

}