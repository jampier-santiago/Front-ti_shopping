import styled from "styled-components";
import tw from "twin.macro";

const StylesButton = styled.button`
  ${tw`box-border px-4 py-2 bg-primary border-0 rounded-md w-full cursor-pointer`}
  &:hover {
    ${tw`bg-white`}
  }
  &:hover span {
    ${tw`text-primary`}
  }
`;

const StylesText = styled.span`
  ${tw`text-white text-base font-semibold`}
`;

const useStyles = () => {
  return { StylesButton, StylesText };
};

export default useStyles;
