import React, { FC } from "react";
import { Props } from "./interface";
import useStyles from "./Input.styled";

const Input: FC<Props> = ({
  id,
  placeholder,
  textLabel,
  className,
  type = "text",
  register,
  required,
  dark = false,
  disabled,
}) => {
  const { StylesInput, StylesTxtLabel, StylesRow } = useStyles();
  return (
    <StylesRow className={className}>
      <StylesTxtLabel>{textLabel}</StylesTxtLabel>
      <StylesInput
        {...register(id, { required })}
        type={type}
        placeholder={placeholder}
        id={id}
        dark={dark}
        disabled={disabled}
      />
    </StylesRow>
  );
};

export default Input;
