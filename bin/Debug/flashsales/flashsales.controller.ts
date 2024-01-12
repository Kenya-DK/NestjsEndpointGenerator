import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FlashsalesService } from './Flashsales.service';
@ApiTags("Flashsales")
@Controller()
export class FlashsalesController {
  constructor(private readonly _flashsalesService: FlashsalesService) { }

}