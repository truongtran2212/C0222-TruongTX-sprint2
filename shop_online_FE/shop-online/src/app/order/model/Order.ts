import {Transaction} from "../../transaction/model/transaction";
import {Product} from "../../product/model/Product";

export interface Order {
  id?: number;
  isDelete?: number;
  quantity?: number;
  transactionOrder?: Transaction;
  product?: Product;
}
