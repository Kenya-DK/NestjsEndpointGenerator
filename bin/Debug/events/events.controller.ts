import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventsService } from './Events.service';
@ApiTags("Events")
@Controller()
export class EventsController {
  constructor(private readonly _eventsService: EventsService) { }

}