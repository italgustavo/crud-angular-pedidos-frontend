import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDetailsComponent } from './pedidos-details.component';

describe('PedidosDetailsComponent', () => {
  let component: PedidosDetailsComponent;
  let fixture: ComponentFixture<PedidosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
