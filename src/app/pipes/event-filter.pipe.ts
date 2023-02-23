import { Pipe, PipeTransform } from '@angular/core';
import { SvEvent } from '../interfaces/svevent';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(events: SvEvent[], search: string): SvEvent[] {
    const filter = search ? search.toLocaleLowerCase() : null;

    if(filter){
      let eventsTitle: any[];
      let eventsDescription: any[];

      eventsTitle = events.filter(e => e.title.toLocaleLowerCase().includes(filter));
      eventsDescription = events.filter(e => e.description.toLocaleLowerCase().includes(filter))

      events = Array.from(new Set(eventsTitle.concat(eventsDescription)));
    }

    return events;
  }
}
