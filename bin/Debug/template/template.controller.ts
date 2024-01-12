import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { [NAME]Service } from './[NAME].service';
@ApiTags("[TAG]")
@Controller()
export class [NAME]Controller {
  constructor(private readonly _[NAMEPROP]Service: [NAME]Service) { }

}