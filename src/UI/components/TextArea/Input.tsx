import { FC } from "react";
import { Props } from "./interface";
import useStyles from "./Input.styled";

const TextArea: FC<Props> = ({
  id,
  placeholder,
  textLabel,
  className,
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
        placeholder={placeholder}
        id={id}
        dark={dark}
        disabled={disabled}
        autoComplete="off"
      />
    </StylesRow>
  );
};

export default TextArea;
