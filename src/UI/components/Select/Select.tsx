// Packages
import { FC } from "react";

// Styles
import useStyles from "./select.styles";

// Interfaces
import { Props } from "./select.interfaces";

const Select: FC<Props> = ({
  id,
  placeholder,
  register,
  textLabel,
  className,
  dark,
  disabled,
  required,
  options,
}) => {
  // Styles
  const { StylesInput, StylesRow, StylesTxtLabel } = useStyles();

  return (
    <StylesRow className={className}>
      <StylesTxtLabel>{textLabel}</StylesTxtLabel>

      <StylesInput
        {...register(id, { required })}
        placeholder={placeholder}
        id={id}
        dark={dark}
        disabled={disabled}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </StylesInput>
    </StylesRow>
  );
};

export default Select;
