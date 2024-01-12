import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AlertsService } from './Alerts.service';
@ApiTags("Alerts")
@Controller()
export class AlertsController {
  constructor(private readonly _alertsService: AlertsService) { }

}