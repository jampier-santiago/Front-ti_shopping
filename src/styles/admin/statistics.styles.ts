import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`box-border w-full px-6 py-12`}
`;

const StyledTitle = styled.h1`
  ${tw`text-4xl font-bold tracking-wider text-center`}
`;

const StyledSubtitle = styled.h2`
  ${tw`text-2xl font-semibold text-center font-["Archivo Narrow"]`}
`;

const useStatisticsStyles = () => {
  return { StyledMain, StyledTitle, StyledSubtitle };
};

export default useStatisticsStyles;
