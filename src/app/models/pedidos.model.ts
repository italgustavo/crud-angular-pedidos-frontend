import { Produtos } from "./produtos.model";

export class Pedidos {
  id?: any;
  title?: string;
  description?: string;
  published?: boolean;
  products? : Produtos[];
}
