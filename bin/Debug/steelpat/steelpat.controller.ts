import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SteelpatService } from './Steelpat.service';
@ApiTags("Steelpat")
@Controller()
export class SteelpatController {
  constructor(private readonly _steelpatService: SteelpatService) { }

}