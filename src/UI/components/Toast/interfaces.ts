export interface Props {
  children?: any;
  variant: "success" | "error";
}

export interface GeneralProps extends Props {
  children?: any;
  timeHidden: number;
  close: () => void;
}
