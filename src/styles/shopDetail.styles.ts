import styled from "styled-components";
import tw from "twin.macro";

const StyledDiv = styled.div`
  ${tw`w-full`}
`;

const StyleMain = styled.header`
  ${tw` w-full flex justify-center items-center bg-white  text-red-500 h-[45vh] relative overflow-hidden  `}
`;

const StyleDecorationHero = styled.div`
  ${tw`absolute left-0 bg-black top-0 bottom-0 right-0 `}
`;

const StyleSquareShop = styled.div`
  ${tw`w-80 h-80  rounded-xl bg-center bg-cover cursor-pointer `}
`;

const StyleSectionShop = styled.section`
  ${tw`grid grid-cols-3 mx-auto max-w-screen-lg `}
`;

const StyleTittle = styled.h1`
  ${tw`text-while z-10 text-8xl mix-blend-difference`}
`;

const StyleSubTittle = styled.h2`
  ${tw` text-while z-10 max-w-[60%] text-center mix-blend-difference`}
`;
const StyleLeftSection = styled.section`
  ${tw`lg:w-2/6 h-screen bg-black box-border p-5 flex justify-center`}
`;
const StyleRigthtSection = styled.div`
  ${tw`lg:w-4/6 h-screen bg-center bg-cover hidden lg:block`}
`;
const useShopDetailStyes = () => {
  return {
    StyledDiv,
    StyleMain,
    StyleDecorationHero,
    StyleSquareShop,
    StyleSectionShop,
    StyleTittle,
    StyleSubTittle,
    StyleLeftSection,
    StyleRigthtSection,
  };
};

export default useShopDetailStyes;
