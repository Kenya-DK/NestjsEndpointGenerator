import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SortieService } from './Sortie.service';
@ApiTags("Sortie")
@Controller()
export class SortieController {
  constructor(private readonly _sortieService: SortieService) { }

}