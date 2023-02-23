import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SvEvent } from '../interfaces/svevent';

@Component({
  selector: 'sv-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  newEvent: SvEvent = {
    title: '',
    description: '',
    price: NaN,
    image: '',
    date: '',
  };
  imageName: string = '';
  @Output() createEvent = new EventEmitter<SvEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(){
    this.createEvent.emit(this.newEvent);

    this.newEvent = {
      title: '',
      description: '',
      price: NaN,
      image: '',
      date: '',
    };
    this.imageName = '';
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.image = reader.result as string;
    });
  }
}
