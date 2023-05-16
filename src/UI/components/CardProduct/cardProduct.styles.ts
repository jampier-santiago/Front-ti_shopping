import styled from "styled-components";
import tw from "twin.macro";

const StyledCardProduct = styled.div`
  ${tw`box-border shadow-xl rounded-2xl px-2 py-2.5`}

  & img {
    ${tw`w-[65vw] h-[65vw] lg:w-full lg:max-h-[30vh] mx-auto block`}
  }

  & h3 {
    ${tw`text-lg font-medium tracking-wide text-center`}
  }
`;

const StyledRowButtonCard = styled.div`
  ${tw`flex items-center justify-around w-full gap-4 mt-5`}
`;

const useCardProductStyles = () => {
  return {
    StyledCardProduct,
    StyledRowButtonCard,
  };
};

export default useCardProductStyles;
