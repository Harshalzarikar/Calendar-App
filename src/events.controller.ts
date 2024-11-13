import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.model';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() event: Omit<Event, 'id'>): Event {
    return this.eventsService.create(event);
  }

  @Get()
  findAll(): Event[] {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Event {
    const event = this.eventsService.findOne(Number(id));
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedEvent: Partial<Event>): Event {
    const event = this.eventsService.update(Number(id), updatedEvent);
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    const deleted = this.eventsService.delete(Number(id));
    if (!deleted) {
      throw new NotFoundException('Event not found');
    }
  }
}
