import {Category} from "./Category";

export interface Product {
  id?: number;

  name?: string;

  origin?: string;

  price?: number;

  quantity?: number;

  specifications?: string;

  image?: string;

  isDeleted?: number;

  category: Category;

  quantityOrder?: number;
}
