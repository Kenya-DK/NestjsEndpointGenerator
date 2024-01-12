import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KuvaService } from './Kuva.service';
@ApiTags("Kuva")
@Controller()
export class KuvaController {
  constructor(private readonly _kuvaService: KuvaService) { }

}