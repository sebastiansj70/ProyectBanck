import { EstadoProducto } from './EstadoProducto';
import { EstadoAccount } from './EstadoAccount';

export interface EstadoGeneral {
  productos: EstadoProducto;
  account: EstadoAccount;
}
