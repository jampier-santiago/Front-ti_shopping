import styled from "styled-components";
import tw from "twin.macro";

const StyledDiv = styled.div`
  ${tw`w-full`}
`;

const StyleMain = styled.header`
  ${tw` w-full flex flex-col justify-center items-center bg-white  text-red-500 lg:h-[45vh] relative overflow-hidden  box-border p-8`}
`;

const StyleDecorationHero = styled.div`
  ${tw`absolute top-0 bottom-0 left-0 right-0 bg-black `}
`;

const StyleSquareShop = styled.div`
  ${tw`mx-auto bg-center bg-cover cursor-pointer w-80 h-80 rounded-xl`}
`;

const StyleSectionShop = styled.section`
  ${tw`grid max-w-screen-lg grid-cols-1 gap-4 mx-auto my-12 lg:grid-cols-3 `}
`;

const StyleTittle = styled.h1`
  ${tw`z-10 text-4xl text-center text-while lg:text-8xl mix-blend-difference`}
`;

const StyleSubTittle = styled.h2`
  ${tw` text-while text-xl lg:text-3xl z-10 lg:max-w-[60%] text-center mix-blend-difference`}
`;

const useShopViewStyles = () => {
  return {
    StyledDiv,
    StyleMain,
    StyleDecorationHero,
    StyleSquareShop,
    StyleSectionShop,
    StyleTittle,
    StyleSubTittle,
  };
};
export default useShopViewStyles;
