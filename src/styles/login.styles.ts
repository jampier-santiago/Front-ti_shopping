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
  ${tw`box-border mt-10`}
`;

const StyleRow = styled.div`
  ${tw`w-full mb-8`}
`;

const useLoginStyles = () => {
  return {
    StyledMain,
    StyleLeftSection,
    StyleTitle,
    StyleForm,
    StyleRow,
    StyleRigthtSection,
  };
};

export default useLoginStyles;
