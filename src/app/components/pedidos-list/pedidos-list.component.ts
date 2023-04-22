import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/models/pedidos.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  pedidos?: Pedidos[];
  currentPedidos: Pedidos = {};
  currentIndex = -1;
  title = '';

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.retrievePedidos();
  }

  retrievePedidos(): void {
    this.pedidosService.getAll()
      .subscribe({
        next: (data) => {
          this.pedidos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePedidos();
    this.currentPedidos = {};
    this.currentIndex = -1;
  }

  setActivePedidos(pedidos: Pedidos, index: number): void {
    this.currentPedidos = pedidos;
    this.currentIndex = index;
  }

  removeAllPedidos(): void {
    this.pedidosService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentPedidos = {};
    this.currentIndex = -1;

    this.pedidosService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.pedidos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
