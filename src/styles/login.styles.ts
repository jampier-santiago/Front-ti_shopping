import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`box-border flex w-full `}
`;

const StyleLeftSection = styled.section`
  ${tw`lg:w-2/6 h-screen bg-black box-border p-5 flex flex-col justify-center`}
`;

const StyleRigthtSection = styled.section`
  ${tw`w-4/6 h-screen bg-center bg-cover`}
`;

const StyleTitle = styled.h1`
  ${tw`text-white text-4xl font-bold`}
`;

const StyleForm = styled.form`
  ${tw`box-border mt-10 max-h-[70vh] overflow-auto  `}
  &::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    ${tw`bg-primary `}
    border-radius: 25px;
  }
`;

const StyleRow = styled.div`
  ${tw`w-full mb-8`}
`;

const StyleErrorInput = styled.span`
  ${tw`text-red-500 font-bold text-lg mb-4`}
`;
const useLoginStyles = () => {
  return {
    StyledMain,
    StyleLeftSection,
    StyleTitle,
    StyleForm,
    StyleRow,
    StyleRigthtSection,
    StyleErrorInput,
  };
};

export default useLoginStyles;
