import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArbitrationService } from './Arbitration.service';
@ApiTags("Arbitration")
@Controller()
export class ArbitrationController {
  constructor(private readonly _arbitrationService: ArbitrationService) { }

}