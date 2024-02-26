export interface ResponseShopDetail {
  Address: string;
  Email: string;
  Facebook: string;
  Id_sellers: number;
  Id_stores: number;
  Instagram: string;
  logo: string;
  Num_telephone: string | number;
  Page_web: string;
  active_bank_account_number: number;
  Business_description: string;
  keyword: string;
  main_color: string;
  name_store: string;
  state: number;
}

export interface ResponseProducts {
  Id_product: string | number;
  Name_product: string;
  Description_product: string;
  image: string;
  Price: string;
}

export interface RequestMakeShopDetail {
  name: string;
  //continuar con postman
  token: string;
}

export interface ResponseMakeShopDetail {
  //validar paramateros con postman
}
