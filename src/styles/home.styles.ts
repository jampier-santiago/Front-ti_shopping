import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`w-full bg-red-600`}
`;

const StylesTitle = styled.h1`
  ${tw`text-3xl font-bold`}
`;

export const useHomeStyles = () => {
  return { StyledMain, StylesTitle };
};
