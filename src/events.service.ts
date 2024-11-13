import { Injectable } from '@nestjs/common';
import { Event } from './event.model';
@Injectable()
export class EventsService {
  private events: Event[] = [];
  private idCounter = 1;
  create(event: Omit<Event, 'id'>): Event {
    const newEvent = new Event({ ...event, id: this.idCounter++ });
    this.events.push(newEvent);
    return newEvent;
  }
  findAll(): Event[] {
    return this.events;
  }
  findOne(id: number): Event | undefined {
    return this.events.find((event) => event.id === id);
  }
  update(id: number, updatedEvent: Partial<Event>): Event | undefined {
    const event = this.findOne(id);
    if (event) {
      Object.assign(event, updatedEvent);
      return event;
    }
    return undefined;
  }
  delete(id: number): boolean {
    const index = this.events.findIndex((event) => event.id === id);
    if (index !== -1) {
      this.events.splice(index, 1);
      return true;
    }
    return false;
  }
}
