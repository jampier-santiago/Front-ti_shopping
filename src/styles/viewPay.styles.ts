import styled from "styled-components";
import tw from "twin.macro";

const StyledContainer = styled.main`
  ${tw`box-border w-full px-4 relative py-8 min-h-[87vh]`}
`;

const StyledTitle = styled.h1`
  ${tw`mx-auto text-5xl text-center`}
`;

const StyledSectionProducts = styled.section`
  ${tw`w-[90%] box-border lg:flex-row flex-col flex gap-24 mt-8 mx-auto`}
`;

const StyledSideLeft = styled.article`
  ${tw`w-full lg:w-2/4`}
`;

const StyledSideRigth = styled.form`
  ${tw`w-full lg:w-2/4`}
`;

const StyledSectionError = styled.article`
  ${tw`flex items-center mt-52 justify-center mx-auto w-[75%]`}
`;

const StyledTitleError = styled.h2`
  ${tw`text-4xl font-semibold text-center text-red-600`}
`;

const StyledRow = styled.div`
  ${tw`flex items-center justify-between px-3 w-full mb-8 border-t-0 border-b-2 border-solid border-x-0 box-border pb-3.5`}
`;

const StyledImgProduct = styled.img`
  ${tw`w-32 h-32`}
`;

const StyledTitleForm = styled.h2`
  ${tw`mx-auto text-2xl font-semibold text-center`}
`;

const StyledRowForm = styled.div`
  ${tw`w-[80%] mx-auto `}

  & label, & input {
    ${tw`text-black`}
  }

  & button {
    ${tw`mt-16 w-[75%] mx-auto block`}
  }
`;

const useViewPayStyle = () => {
  return {
    StyledContainer,
    StyledTitle,
    StyledSectionError,
    StyledTitleError,
    StyledRow,
    StyledSectionProducts,
    StyledImgProduct,
    StyledSideLeft,
    StyledSideRigth,
    StyledTitleForm,
    StyledRowForm,
  };
};

export default useViewPayStyle;
