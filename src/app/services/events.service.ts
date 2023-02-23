import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(){
    return [
      {
        title: 'Event 1',
        date: '2021-11-30',
        description: 'It\'s gonna be great!',
        image: 'assets/evento1.jpg',
        price: 43
      },
      {
        title: 'Event 2',
        date: '2021-12-31',
        description: 'Not so great',
        image: 'assets/evento2.jpg',
        price: 34.5
      },
      {
        title: 'Event 3',
        date: '2022-01-31',
        description: 'Description',
        image: 'assets/evento1.jpg',
        price: 8
      },
    ]
  }
}
