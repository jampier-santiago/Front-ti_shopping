import { FC } from "react";
import { Props } from "./interface";
import useStyles from "./Button.styles";
const Button: FC<Props> = ({
  id,
  className,
  text,
  onClick,
  type = "button",
}) => {
  const { StylesButton } = useStyles();
  return (
    <StylesButton id={id} className={className} onClick={onClick} type={type}>
      {text}
    </StylesButton>
  );
};

export default Button;
