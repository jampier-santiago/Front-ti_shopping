export interface Props {
  image: string;
  id: string;
  name: string;
  urlSee: string;
  action: (id: string) => void;
}
