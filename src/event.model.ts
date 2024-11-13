export class Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  constructor(partial: Partial<Event>) {
    Object.assign(this, partial);
  }
}
