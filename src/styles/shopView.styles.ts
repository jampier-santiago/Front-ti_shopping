import styled from "styled-components";
import tw from "twin.macro";

const StyledDiv = styled.div`
  ${tw`w-full`}
`;

const StyleMain = styled.div`
  ${tw`h-1/2 w-full flex  justify-center items-center bg-red-500  text-while`}
`;

// .contenedor-texto-testimonio {
//     text-align: center;
//     padding: 40px;
//     font-family: Lato, sans-serif;
//     font-weight: 400;
//     line-height: 1.5rem;

const useShopViewStyles = () => {
  return {
    StyledDiv,
    StyleMain,
  };
};
export default useShopViewStyles;
