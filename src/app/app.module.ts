import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProdutosComponent } from './components/add-produtos/add-produtos.component';
import { AddPedidosComponent } from './components/add-pedidos/add-pedidos.component';
import { PedidosDetailsComponent } from './components/pedidos-details/pedidos-details.component';
import { PedidosListComponent } from './components/pedidos-list/pedidos-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosDetailsComponent } from './components/produtos-details/produtos-details.component';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProdutosComponent,
    AddPedidosComponent,
    PedidosDetailsComponent,
    PedidosListComponent,
    ProdutosDetailsComponent,
    ProdutosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
