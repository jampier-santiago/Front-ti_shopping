// Packages
import { FC } from "react";

// Interfaces
import { Props } from "./interface";

// Styles
import useStyles from "./Button.styles";

const Button: FC<Props> = ({
  id,
  className,
  text,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const { StylesButton, StylesText } = useStyles();

  return (
    <StylesButton
      id={id}
      className={className}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      <StylesText>{text}</StylesText>
    </StylesButton>
  );
};

export default Button;
