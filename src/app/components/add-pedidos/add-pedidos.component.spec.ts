import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPedidosComponent } from './add-pedidos.component';

describe('AddPedidosComponent', () => {
  let component: AddPedidosComponent;
  let fixture: ComponentFixture<AddPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
