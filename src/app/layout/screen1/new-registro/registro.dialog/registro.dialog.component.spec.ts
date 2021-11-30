import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro.DialogComponent } from './registro.dialog.component';

describe('Registro.DialogComponent', () => {
  let component: Registro.DialogComponent;
  let fixture: ComponentFixture<Registro.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registro.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
