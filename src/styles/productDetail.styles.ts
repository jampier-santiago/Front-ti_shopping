import styled from "styled-components";
import tw from "twin.macro";

const StyledDiv = styled.div`
  ${tw`w-full`}
`;

const useProductDetail = () => {
  return {
    StyledDiv,
  };
};

export default useProductDetail;
