import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos?: Produtos[];
  currentProdutos: Produtos = {};
  currentIndex = -1;
  title = '';

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.retrieveProdutos();
  }

  retrieveProdutos(): void {
    this.produtosService.getAll()
      .subscribe({
        next: (data) => {
          this.produtos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveProdutos();
    this.currentProdutos = {};
    this.currentIndex = -1;
  }

  setActiveProdutos(produto: Produtos, index: number): void {
    this.currentProdutos = produto;
    this.currentIndex = index;
  }

  removeAllProdutos(): void {
    this.produtosService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentProdutos = {};
    this.currentIndex = -1;

    this.produtosService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.produtos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
