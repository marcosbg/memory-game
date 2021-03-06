import { Figure } from '../figure';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { OnInit, Component } from '@angular/core';
import { FIGURES } from '../mock-figures';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  selectedFigures: Figure[] = [];
  matchedFigures: Figure[] = [];

  figures = FIGURES;
  debounce: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(1000))
      .subscribe(() => {
          if (this.selectedFigures[0].id === this.selectedFigures[1].id) {
            this.matchedFigures.push(this.selectedFigures[0])
            this.matchedFigures.push(this.selectedFigures[1])
          }

          this.selectedFigures = []
      });
  }

  onSelect(figure: Figure) {
    if (!this.selectedFigures.includes(figure)) {
      if (this.selectedFigures.length < 2) {
        this.selectedFigures.push(figure);
      }
    }

    if (this.selectedFigures.length === 2) {
      this.debounce.next();
    }
  }
}
