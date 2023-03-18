import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  ${tw`bg-red-400`}
`;

const useLoginStyles = () => {
  return { StyledMain };
};

export default useLoginStyles;
