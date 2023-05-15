import styled from "styled-components/macro";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`box-border w-full px-6 py-10 lg:px-36 lg:py-40`}
`;

const StyledTitle = styled.h1`
  ${tw`text-3xl font-bold text-center`}
`;

const StyledRowMoreProducts = styled.div`
  ${tw`box-border w-2/4 mx-auto mb-4`}
`;

const StledContainerProducts = styled.section`
  ${tw`box-content w-full max-w-[800px] mx-auto `}
`;

const StyledRow = styled.div`
  ${tw`box-border flex items-center justify-between w-full px-5 py-2 border-t-0 border-b border-solid border-x-0 border-b-black`}
`;

const StyledNameProduct = styled.h2`
  ${tw`m-0 text-base font-medium`}
`;

const StyledContainerIcons = styled.div`
  ${tw`flex items-center gap-3`}
`;

const StyledIcon = styled.img`
  ${tw`w-6 h-6 cursor-pointer`}
`;

const StyledContainerEmptyProducts = styled.section`
  ${tw`w-full mx-auto max-w-[500px]`}
`;

const StyledTitleEmptyProducts = styled.h3`
  ${tw`text-2xl font-semibold text-center capitalize font-["Archivo Narrow"] text-primary`}
`;

const useProductsStyles = () => {
  return {
    StyledMain,
    StyledTitle,
    StledContainerProducts,
    StyledRow,
    StyledNameProduct,
    StyledIcon,
    StyledContainerIcons,
    StyledContainerEmptyProducts,
    StyledTitleEmptyProducts,
    StyledRowMoreProducts,
  };
};

export default useProductsStyles;
