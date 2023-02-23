import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SvEvent } from '../interfaces/svevent';

@Component({
  selector: 'sv-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() event!: SvEvent;
  @Output() delete = new EventEmitter<SvEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvent() {
    this.delete.emit(this.event);
  }
}
