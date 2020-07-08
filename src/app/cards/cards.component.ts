import { Component, OnInit } from '@angular/core';
import { Figure } from '../figure';
import { FIGURES } from '../mock-figures';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  selectedFigure: Figure;

  figures = FIGURES;

  constructor() { }

  onSelect(figure: Figure): void {
    this.selectedFigure = figure;
  }

  ngOnInit(): void {
  }
}
