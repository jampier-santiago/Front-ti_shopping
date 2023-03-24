import React, { FC } from "react";
import { Props } from "./interface";
import useStyles from "./Input.styled";

const Input: FC<Props> = ({
  id,
  placeholder,
  textLabel,
  className,
  type = "text",
}) => {
  const { StylesInput, StylesTxtLabel, StylesRow } = useStyles();
  return (
    <StylesRow className={className}>
      <StylesTxtLabel>{textLabel}</StylesTxtLabel>
      <StylesInput type={type} placeholder={placeholder} id={id} />
    </StylesRow>
  );
};

export default Input;
