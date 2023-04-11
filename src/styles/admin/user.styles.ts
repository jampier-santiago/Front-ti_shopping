import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`box-border px-6`}
`;

const StyledTitle = styled.h1`
  ${tw`text-3xl font-bold text-center`}
`;

const useUserStyles = () => {
  return { StyledMain, StyledTitle };
};

export default useUserStyles;
