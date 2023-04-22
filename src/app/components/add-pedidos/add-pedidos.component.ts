import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/models/pedidos.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-add-pedidos',
  templateUrl: './add-pedidos.component.html',
  styleUrls: ['./add-pedidos.component.css']
})
export class AddPedidosComponent implements OnInit {

  pedidos: Pedidos = {
    title: '',
    description: '',
    published: false
  };
  submitted = false

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

  savePedidos(): void {
    const data = {
      title: this.pedidos.title,
      description: this.pedidos.description
    };

    this.pedidosService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPedidos(): void {
    this.submitted = false;
    this.pedidos = {
      title: '',
      description: '',
      published: false
    };
  }

}
