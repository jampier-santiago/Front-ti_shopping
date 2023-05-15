import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const StyledMain = styled.main`
  ${tw`box-border flex flex-col w-full lg:flex-row`}
`;

const StyleLeftSection = styled.section`
  ${tw`box-border flex flex-col justify-center h-screen p-5 bg-black lg:w-2/6`}
`;

const StyleRigthtSection = styled.div`
  ${tw`hidden h-screen bg-center bg-cover lg:w-4/6 lg:block`}
`;

const StyleTitle = styled.h1`
  ${tw`text-4xl font-bold text-white`}
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

const StyledlinkLogin = styled.span`
  ${tw`block mx-auto text-lg font-medium text-center text-primary`}
`;

const StyleErrorInput = styled.span`
  ${tw`mb-4 text-lg font-bold text-red-500`}
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
    StyledlinkLogin,
  };
};

export default useLoginStyles;
