import tw from "twin.macro";
import styled from "styled-components/macro";

const StyledMain = styled.main`
  ${tw`box-border w-full lg:max-w-[700px] lg:mx-auto min-h-[90vh] px-6 py-4 relative`}
`;

const StyledTitle = styled.h1`
  ${tw`z-0 text-4xl font-bold text-center`}
`;

const StyledBody = styled.section`
  ${tw`w-full mt-6`}
`;

const StyledRow = styled.div`
  ${tw`box-border flex items-center justify-between w-full pb-3 mb-3 border-t-0 border-b border-l-0 border-r-0 border-solid border-b-black`}

  & span {
    ${tw`text-xl font-medium text-left`}
  }
`;

const StyledButtonRow = styled.div<{ active: boolean }>`
  ${tw`box-border block px-4 py-3 font-semibold border border-solid cursor-pointer`}

  ${({ active }) =>
    active
      ? tw`text-green-400 border-green-400`
      : tw`text-red-500 border-red-500`}
`;

const useStyles = () => {
  return {
    StyledMain,
    StyledTitle,
    StyledBody,
    StyledRow,
    StyledButtonRow,
  };
};

export default useStyles;