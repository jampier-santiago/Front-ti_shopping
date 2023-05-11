// Packages
import styled from "styled-components/macro";
import tw from "twin.macro";

// Interfaces
import { Props } from "./interfaces";

const StyledToast = styled.div<Props>`
  ${tw`box-border absolute top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-6 text-2xl font-semibold tracking-widest text-center text-white`}

  ${({ variant }) =>
    variant === "success" ? tw`bg-green-400` : tw`bg-red-400`}
`;

const useStyles = () => {
  return { StyledToast };
};

export default useStyles;
