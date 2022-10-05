import {Category} from "./Category";

export interface Product {
  id?: number;

  name?: string;

  origin?: string;

  price?: number;

  quantity?: number;

  description?: string;

  image?: string;

  isDeleted?: number;

  category: Category;

  quantityOrder?: number;
}
