import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`box-border px-6`}
`;

const StyledTitle = styled.h1`
  ${tw`text-3xl font-bold text-center`}
`;

const StyledForm = styled.form`
  ${tw`box-border flex flex-col w-full gap-3 mb-6`}
`;

const useUserStyles = () => {
  return { StyledMain, StyledTitle, StyledForm };
};

export default useUserStyles;
