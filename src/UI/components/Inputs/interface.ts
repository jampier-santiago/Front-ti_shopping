import { UseFormRegister } from "react-hook-form";

export interface Props {
  id: string;
  className?: string;
  type?: string;
  placeholder: string;
  textLabel: string;
  register: UseFormRegister<any>;
  required?: boolean;
  dark?: boolean;
}
