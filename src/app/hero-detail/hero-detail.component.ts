import { Component, OnInit, Input } from '@angular/core';
import { Figure } from '../figure';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() figure: Figure;

  constructor() { }

  ngOnInit(): void {
  }

}
