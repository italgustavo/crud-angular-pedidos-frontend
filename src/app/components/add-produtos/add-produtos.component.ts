import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.component.html',
  styleUrls: ['./add-produtos.component.css']
})
export class AddProdutosComponent implements OnInit {

  produtos: Produtos = {
    name: '',
    description: '',
    price: 0
  };

  submitted = false

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
  }

  saveProdutos(): void {
    const data = {
      name: this.produtos.name,
      description: this.produtos.description,
      price: this.produtos.price
    };

    this.produtosService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProdutos(): void {
    this.submitted = false;
    this.produtos = {
      name: '',
      description: '',
      price: 0
    };
  }

}
