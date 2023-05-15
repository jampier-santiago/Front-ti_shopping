import styled from "styled-components/macro";
import tw from "twin.macro";

const StyledContainer = styled.section`
  ${tw`box-border w-full px-8 py-6`}
`;

const StyledTitle = styled.h1`
  ${tw`text-2xl tracking-widest text-center`}
`;

const StyledForm = styled.form`
  ${tw`box-border w-full mt-5 lg:max-w-[700px] lg:mx-auto`}
`;

const StyledRow = styled.div`
  ${tw`box-border w-full mb-3`}

  & input, & label, & select, & textarea {
    ${tw`text-black`}
  }
`;

const useStyles = () => {
  return { StyledContainer, StyledTitle, StyledForm, StyledRow };
};

export default useStyles;
