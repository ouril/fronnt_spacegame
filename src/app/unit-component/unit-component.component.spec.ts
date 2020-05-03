import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitComponentComponent } from './unit-component.component';

describe('UnitComponentComponent', () => {
  let component: UnitComponentComponent;
  let fixture: ComponentFixture<UnitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
