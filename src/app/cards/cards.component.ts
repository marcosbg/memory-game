import { Component, OnInit } from '@angular/core';
import { Figure } from '../figure';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  figures: Figure[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(figures => this.figures = figures);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
