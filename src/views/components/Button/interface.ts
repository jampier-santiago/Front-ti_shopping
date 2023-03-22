export interface Props {
  id?: string;
  className: string;
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
}
