import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [],
  controllers: [AppController, EventsController],
  providers: [AppService, EventsService],
})
export class AppModule {}
