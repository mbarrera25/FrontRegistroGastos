import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistroComponent } from './new-registro.component';

describe('NewRegistroComponent', () => {
  let component: NewRegistroComponent;
  let fixture: ComponentFixture<NewRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
