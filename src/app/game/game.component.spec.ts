import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSelect function when fisrt card is clicked', fakeAsync(() => {
    spyOn(component, 'onSelect');
    let card = fixture.debugElement.nativeElement.querySelector('app-card');
    card.click();
    tick();
    expect(component.onSelect).toHaveBeenCalledWith(component.figures[0]);

  }));

  it('should render figure name when first card is clicked', () => {
    let card = fixture.debugElement.nativeElement.querySelector('app-card');
    card.click();
    fixture.detectChanges();
    expect(component.selectedFigures).toContain(component.figures[0])
    card.click();
    fixture.detectChanges();
    expect(component.selectedFigures.length).toBe(1)
  });

  it('should render figure name when first card is clicked', () => {
    let card1 = fixture.debugElement.nativeElement.querySelectorAll('app-card')[0];
    let card2 = fixture.debugElement.nativeElement.querySelectorAll('app-card')[1];
  });
});
