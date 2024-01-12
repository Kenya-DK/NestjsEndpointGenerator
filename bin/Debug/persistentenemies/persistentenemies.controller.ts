import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersistentenemiesService } from './Persistentenemies.service';
@ApiTags("Persistentenemies")
@Controller()
export class PersistentenemiesController {
  constructor(private readonly _persistentenemiesService: PersistentenemiesService) { }

}