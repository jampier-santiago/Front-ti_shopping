export interface ProductResponse {
  Id_product: string | number;
  Name_product: string;
  Description_product: string;
  Price: string | number;
  image: string;
  id_store?: string;
}
