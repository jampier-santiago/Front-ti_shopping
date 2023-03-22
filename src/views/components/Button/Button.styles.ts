import styled from "styled-components";
import tw from "twin.macro";

const StylesButton = styled.button`
  ${tw`bg-red-500`}
`;

const useStyles = () => {
  return { StylesButton };
};

export default useStyles;
