import styled from "styled-components";
import tw from "twin.macro";

const StyledContainer = styled.main`
  ${tw`box-border w-full `}
`;

const StyledHeader = styled.header`
  ${tw`box-border relative w-full h-[60vh] bg-black px-5 py-7 lg:px-16 lg:py-20`}
`;

const StyledTitle = styled.h1`
  ${tw`text-2xl text-white lg:text-4xl`}
`;

const StyledDescription = styled.p`
  ${tw`mt-6 text-lg text-left text-white lg:text-2xl lg:max-w-[65%]`}
`;

const StyledImageHeader = styled.img`
  ${tw`absolute right-0 w-[85vw] lg:w-[45vw] bottom-0`}
`;

const StyledContainerSectionProducts = styled.section`
  ${tw`box-border w-full my-6`}
`;

const StyledCategorias = styled.div`
  ${tw`box-border w-full px-5 py-7`}

  & h3 {
    ${tw`text-2xl font-semibold tracking-wider text-left text-[#00a6c6]`}
  }
`;

const StyledContainerCategories = styled.div`
  ${tw`flex flex-wrap items-center w-full gap-3 mt-3.5`}
`;

const StyledPillCategory = styled.span`
  ${tw`block cursor-pointer max-w-max box-border px-4 text-white font-medium text-lg py-1.5 rounded-3xl bg-[#00a6c6]`}
`;

const StyledGridProducts = styled.article`
  ${tw`box-border grid w-full grid-cols-1 gap-4 px-5 mt-4 lg:grid-cols-5`}
`;

const useHomeStyles = () => {
  return {
    StyledContainer,
    StyledHeader,
    StyledTitle,
    StyledImageHeader,
    StyledDescription,
    StyledContainerSectionProducts,
    StyledCategorias,
    StyledContainerCategories,
    StyledPillCategory,
    StyledGridProducts,
  };
};

export default useHomeStyles;
