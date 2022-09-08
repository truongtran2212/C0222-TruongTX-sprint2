import {Category} from "./Category";

export interface Product {
  id?: number;

  name?: string;

  releaseTime?: string;

  manufactureTime?: string;

  origin?: string;

  price?: number;

  warrantyPeriod?: string;

  quantity?: number;
  discountPercent?: number;

  specifications?: string;

  description?: string;

  image?: string;

  isDeleted?: number;
  category: Category;
}
