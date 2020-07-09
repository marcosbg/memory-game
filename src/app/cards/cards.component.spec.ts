import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
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
