import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SentientoutpostsService } from './Sentientoutposts.service';
@ApiTags("Sentientoutposts")
@Controller()
export class SentientoutpostsController {
  constructor(private readonly _sentientoutpostsService: SentientoutpostsService) { }

}