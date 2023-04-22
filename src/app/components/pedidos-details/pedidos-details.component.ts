import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedidos } from 'src/app/models/pedidos.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-details',
  templateUrl: './pedidos-details.component.html',
  styleUrls: ['./pedidos-details.component.css']
})
export class PedidosDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPedidos: Pedidos = {
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private pedidosService: PedidosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPedidos(this.route.snapshot.params["id"]);
    }
  }

  getPedidos(id: string): void {
    this.pedidosService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPedidos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentPedidos.title,
      description: this.currentPedidos.description,
      published: status
    };

    this.message = '';

    this.pedidosService.update(this.currentPedidos.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPedidos.published = status;
          this.message = res.message ? res.message : 'Pedido atualizado com sucessso!';
        },
        error: (e) => console.error(e)
      });
  }

  updatePedidos(): void {
    this.message = '';

    this.pedidosService.update(this.currentPedidos.id, this.currentPedidos)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Pedidos atualizado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePedidos(): void {
    this.pedidosService.delete(this.currentPedidos.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/pedidos']);
        },
        error: (e) => console.error(e)
      });
  }

}
