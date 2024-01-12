import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsService } from './News.service';
@ApiTags("News")
@Controller()
export class NewsController {
  constructor(private readonly _newsService: NewsService) { }

}