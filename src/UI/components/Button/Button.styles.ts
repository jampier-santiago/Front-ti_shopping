import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  variant?: "primary" | "secondary";
}

const StylesButton = styled.button<Props>`
  ${tw`box-border w-full px-4 py-2 duration-75 border-0 rounded-md cursor-pointer`}

  ${({ variant }) =>
    variant === "primary" ? tw`bg-primary` : tw`bg-secondary`}

  &:hover {
    ${tw`bg-white`}
  }
  &:hover span {
    ${tw`text-primary`}
  }
`;

const StylesText = styled.span`
  ${tw`text-base font-semibold text-white`}
`;

const useStyles = () => {
  return { StylesButton, StylesText };
};

export default useStyles;
