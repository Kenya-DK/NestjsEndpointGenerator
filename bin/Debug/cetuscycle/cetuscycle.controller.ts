import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CetuscycleService } from './Cetuscycle.service';
@ApiTags("Cetuscycle")
@Controller()
export class CetuscycleController {
  constructor(private readonly _cetuscycleService: CetuscycleService) { }

}