import { Component, OnInit, Input } from '@angular/core';
import { Figure } from '../figure'
import { from } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() figure: Figure;
  @Input() isSelected: boolean = false;
  @Input() isMatched: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
