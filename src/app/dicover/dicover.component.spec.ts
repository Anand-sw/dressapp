import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicoverComponent } from './dicover.component';

describe('DicoverComponent', () => {
  let component: DicoverComponent;
  let fixture: ComponentFixture<DicoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
