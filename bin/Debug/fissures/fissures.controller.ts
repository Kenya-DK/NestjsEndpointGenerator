import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FissuresService } from './Fissures.service';
@ApiTags("Fissures")
@Controller()
export class FissuresController {
  constructor(private readonly _fissuresService: FissuresService) { }

}