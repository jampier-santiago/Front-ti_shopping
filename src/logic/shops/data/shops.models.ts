export interface ResponseShops {
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
  business_description: string;
  keyword: string;
  main_color: string;
  name_store: string;
  state: number;
}

export interface RequestMakeShop {
  name: string;
  //continuar con postman
  token: string;
}

export interface ResponseMakeShop {
  //validar paramateros con postman
}
