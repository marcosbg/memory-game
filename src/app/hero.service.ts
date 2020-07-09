import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Figure } from './figure';
import { FIGURES } from './mock-figures'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Figure[]> {
    // TODO: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
    return of(FIGURES);
  }
}
