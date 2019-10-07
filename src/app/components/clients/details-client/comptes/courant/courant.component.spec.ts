import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourantComponent } from './courant.component';

describe('CourantComponent', () => {
  let component: CourantComponent;
  let fixture: ComponentFixture<CourantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
