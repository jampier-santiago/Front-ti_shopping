import tw from "twin.macro";
import styled from "styled-components/macro";

const StyledContianer = styled.section`
  ${tw`w-full box-border px-3.5 py-5 overflow-y-auto max-h-[90vh]`}
`;

const StyledTitle = styled.h1`
  ${tw`text-3xl tracking-wider text-center`}
`;

const StyledContainerSales = styled.article`
  ${tw`box-border w-full mt-7`}
`;

const StyledTitleSection = styled.h2`
  ${tw`text-2xl font-semibold text-left`}
`;

const StyledSales = styled.div`
  ${tw`w-full mt-4`}
`;

const StyledRowSale = styled.div`
  ${tw`w-full mb-3.5 border-b-2 border-solid box-border px-2 py-1.5 border-b-black border-t-transparent border-l-transparent border-r-transparent`}

  & span {
    ${tw`text-lg font-medium text-primary-400`}
  }

  & > span {
    ${tw` text-black font-semibold mb-1.5 block`}
  }
`;

const useStyles = () => {
  return {
    StyledContianer,
    StyledTitle,
    StyledContainerSales,
    StyledTitleSection,
    StyledSales,
    StyledRowSale,
  };
};

export default useStyles;
