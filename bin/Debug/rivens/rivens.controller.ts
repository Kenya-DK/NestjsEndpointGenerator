import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RivensService } from './Rivens.service';
@ApiTags("Rivens")
@Controller()
export class RivensController {
  constructor(private readonly _rivensService: RivensService) { }

}