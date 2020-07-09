import { Figure } from '../figure';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { OnInit, Component } from '@angular/core';
import { FIGURES } from '../mock-figures';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  selectedFigures: Figure[] = [];

  figures = FIGURES;
  debounce: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(1000))
      .subscribe(() => {
          if (this.selectedFigures[0] === this.selectedFigures[1]) {

          } else {
            this.selectedFigures = []
          }
      });
  }

  onSelect(figure: Figure) {
    // test case
    if (!this.selectedFigures.includes(figure)) {
      // test case
      if (this.selectedFigures.length < 2) {
        this.selectedFigures.push(figure);
      }
    }

    if (this.selectedFigures.length === 2) {
      this.debounce.next();
    }
  }
}
