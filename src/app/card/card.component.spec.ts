import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ? when isClicked is false', () => {
    expect(fixture.nativeElement.querySelector('li').textContent).toContain('?');
  });

  it('should show figure name when isClicked is true', () => {
    component.figure = {
      id: 1,
      name: "Leão"
    }
    component.isSelected = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('li').textContent).toContain('Leão');
  });
});
