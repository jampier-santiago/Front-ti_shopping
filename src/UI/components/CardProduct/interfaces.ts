export interface Props {
  image: string;
  id: string;
  name: string;
  urlSee: string;
  price: string | number;
  action: (id: string) => void;
}
