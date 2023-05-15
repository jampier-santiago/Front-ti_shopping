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
  ${tw`text-black text-5xl flex justify-center [line-height: 0%]`}
`;

const StyleSubTittle = styled.h2`
  ${tw` text-black   flex justify-center  [line-height: 1vw] [overflow-wrap: break-word]
  `}
`;
const StyleLeftSection = styled.section`
  ${tw`lg:w-4/6 h-full bg-blue-100 box-border  p-10 justify-center   `}
`;
const StyleRigthtSection = styled.div`
  ${tw`lg:w-2/6 h-screen bg-center bg-cover hidden lg:block`}
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
