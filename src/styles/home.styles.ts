import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw``}
`;

const StylesTitle = styled.h1`
  ${tw``}
`;

const useHomeStyles = () => {
  return { StyledMain, StylesTitle };
};

export default useHomeStyles;
