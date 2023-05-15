export interface ProductEditMake {
  name: string;
  description: string;
  price: string;
  category: string | number;
  brand: string;
  id_store: string | number;
}

export interface ProductResponse {
  Id_product: string | number;
  Name_product: string;
  Description_product: string;
  Price: string | number;
  image: string | null;
}
