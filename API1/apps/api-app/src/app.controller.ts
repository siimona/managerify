import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageProducerService: MessageProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('invoke-msg')
  getInvokeMsg(@Query('msg') msg: string) {
    this.messageProducerService.sendMessage(
      'Mobital',
      '03f98591-d6ab-4e6b-b0a9-eeb2c6852ea1',
    );
    return msg;
  }
}
