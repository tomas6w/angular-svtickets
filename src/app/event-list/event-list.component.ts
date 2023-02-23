import { Component, OnInit } from '@angular/core';
import { SvEvent } from '../interfaces/svevent';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'sv-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {

  events: SvEvent[] = [];
  search = '';

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  addEvent(event: SvEvent){
    this.events.push(event);
  }

  deleteEvent(event: SvEvent){
    this.events.splice(this.events.indexOf(event), 1);
  }
}
