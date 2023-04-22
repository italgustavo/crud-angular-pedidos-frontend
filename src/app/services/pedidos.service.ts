import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from '../models/pedidos.model';

const baseUrl = 'http://localhost:8080/api/pedidos'

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(baseUrl);
  }

  get(id: any): Observable<Pedidos> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(`${baseUrl}?title=${title}`);
  }
}
