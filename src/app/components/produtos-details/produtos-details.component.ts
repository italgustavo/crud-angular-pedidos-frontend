import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-details',
  templateUrl: './produtos-details.component.html',
  styleUrls: ['./produtos-details.component.css']
})
export class ProdutosDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentProdutos: Produtos = {
    name: '',
    description: '',
    price: 0
  };

  message = '';

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProdutos(this.route.snapshot.params["id"]);
    }
  }

  getProdutos(id: string): void {
    this.produtosService.get(id)
      .subscribe({
        next: (data) => {
          this.currentProdutos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePrice(price: number): void {
    const data = {
      name: this.currentProdutos.name,
      description: this.currentProdutos.description,
      price: price
    };

    this.message = '';

    this.produtosService.update(this.currentProdutos.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentProdutos.price = price;
          this.message = res.message ? res.message : 'Preço atualizado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  updateProduto(): void {
    this.message = '';

    this.produtosService.update(this.currentProdutos.id, this.currentProdutos)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Produto atualizado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteProdutos(): void {
    this.produtosService.delete(this.currentProdutos.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/produtos']);
        },
        error: (e) => console.error(e)
      });
  }
}
