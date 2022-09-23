import {Customer} from "../../customer/model/customer";

export interface Transaction {
  id?: number
  customer: Customer
  startDate?: string;
  payment?: number;
  paymentMethod?: string;

}
