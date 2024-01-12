import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArchonhuntService } from './Archonhunt.service';
@ApiTags("Archonhunt")
@Controller()
export class ArchonhuntController {
  constructor(private readonly _archonhuntService: ArchonhuntService) { }

}