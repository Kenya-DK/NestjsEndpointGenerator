import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConclavechallengesService } from './Conclavechallenges.service';
@ApiTags("Conclavechallenges")
@Controller()
export class ConclavechallengesController {
  constructor(private readonly _conclavechallengesService: ConclavechallengesService) { }

}