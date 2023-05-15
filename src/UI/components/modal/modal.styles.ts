import tw from "twin.macro";
import styled from "styled-components";

const StyledContainer = styled.section`
  ${tw`absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-transparent`}

  & {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
`;

const useStyles = () => {
  return { StyledContainer };
};

export default useStyles;
