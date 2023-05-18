import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`box-border w-full max-h-screen px-6 py-12 overflow-y-auto`}
`;

const StyledTitle = styled.h1`
  ${tw`text-4xl font-bold tracking-wider text-center`}
`;

const StyledSubtitle = styled.h2`
  ${tw`text-2xl font-semibold text-center font-["Archivo Narrow"]`}
`;

const StyledContainerBar = styled.article`
  ${tw`box-border w-full mt-8`}
`;

const useStatisticsStyles = () => {
  return { StyledMain, StyledTitle, StyledSubtitle, StyledContainerBar };
};

export default useStatisticsStyles;
