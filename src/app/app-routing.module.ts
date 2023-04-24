import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PedidosListComponent } from './components/pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './components/pedidos-details/pedidos-details.component';
import { AddPedidosComponent } from './components/add-pedidos/add-pedidos.component';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { ProdutosDetailsComponent } from './components/produtos-details/produtos-details.component';
import { AddProdutosComponent } from './components/add-produtos/add-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
  { path: 'pedidos', component: PedidosListComponent },
  { path: 'pedidos/:id', component: PedidosDetailsComponent },
  { path: 'add', component: AddPedidosComponent },
  { path: 'produtos', component: ProdutosListComponent },
  { path: 'produtos/:id', component: ProdutosDetailsComponent },
  { path: 'addProdutos', component: AddProdutosComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
