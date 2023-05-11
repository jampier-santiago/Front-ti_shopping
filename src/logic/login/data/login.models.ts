export interface RequestLogin {
  email: string;
  password: string;
}

export interface ResponseLogin {
  CVC: string;
  N_credit_card: string;
  address: string;
  creation_date: string | Date;
  credit_card_expiration_date: string | Date;
  email: string;
  id: number;
  num_telephone: string;
  role: string;
  token: string;
  userName: string;
}
