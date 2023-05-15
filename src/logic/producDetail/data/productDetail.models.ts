export interface ResponseProductDetail {
  Id_product: string | number;
  Name_product: string;
  Description_product: string;
  Price: string | number;
  image: string;
}

export interface RequestMakeProductDetail {
  name: string;
  //continuar con postman
  token: string;
}

export interface ResponseMakeProductDetail {
  //validar paramateros con postman
}
