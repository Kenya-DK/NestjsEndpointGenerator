import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NightwaveService } from './Nightwave.service';
@ApiTags("Nightwave")
@Controller()
export class NightwaveController {
  constructor(private readonly _nightwaveService: NightwaveService) { }

}