export interface RequestLogin {
  email: string;
  password: string;
}

export interface ResponsetLogin {
  address: string;
  email: string;
  fullName: string;
  id: string | number;
  phoneNumber: string;
  dateOfMakeAccount?: string;
  role: "SELLER" | "CLIENT" | "ADMIN";
  token: string;
}
