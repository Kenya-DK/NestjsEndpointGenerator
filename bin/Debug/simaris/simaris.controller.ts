import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SimarisService } from './Simaris.service';
@ApiTags("Simaris")
@Controller()
export class SimarisController {
  constructor(private readonly _simarisService: SimarisService) { }

}