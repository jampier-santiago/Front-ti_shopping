import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`box-border`}
`;

const StyledTitle = styled.h1`
  ${tw`text-3xl font-bold text-center`}
`;

const useStatisticsStyles = () => {
  return { StyledMain, StyledTitle };
};

export default useStatisticsStyles;
