import styled from "styled-components";
import tw from "twin.macro";

const StylesButton = styled.button`
  ${tw`box-border w-full px-4 py-2 border-0 rounded-md cursor-pointer bg-primary`}
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
