import {Cart} from "../../cart/model/Cart";
import {Product} from "../../product/model/Product";

export interface ProductOrder {
  id: number;
  cart: Cart;
  product: Product;
}
