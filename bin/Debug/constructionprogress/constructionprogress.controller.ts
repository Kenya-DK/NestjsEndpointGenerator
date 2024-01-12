import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConstructionprogressService } from './Constructionprogress.service';
@ApiTags("Constructionprogress")
@Controller()
export class ConstructionprogressController {
  constructor(private readonly _constructionprogressService: ConstructionprogressService) { }

}