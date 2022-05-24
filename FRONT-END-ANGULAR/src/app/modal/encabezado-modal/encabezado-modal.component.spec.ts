import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoModalComponent } from './encabezado-modal.component';

describe('EncabezadoModalComponent', () => {
  let component: EncabezadoModalComponent;
  let fixture: ComponentFixture<EncabezadoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
