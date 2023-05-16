import styled from "styled-components";
import tw from "twin.macro";

const StyledDiv = styled.div`
  ${tw`w-full`}
`;

const StyleMain = styled.header`
  ${tw` w-full flex justify-center items-center bg-white  text-red-500 relative overflow-hidden  `}
`;

const StyleDecorationHero = styled.div`
  ${tw`absolute left-0 bg-black top-0 bottom-0 right-0 `}
`;

const StyleSquareShop = styled.div`
  ${tw`w-80 rounded-xl bg-center bg-cover cursor-pointer `}
`;

const StyleSectionShop = styled.section`
  ${tw`grid grid-cols-3 mx-auto max-w-screen-lg `}
`;

const StyleTittle = styled.h1`
  ${tw`text-black text-5xl flex justify-center `}
`;

const StyleSubTittle = styled.h2`
  ${tw` text-black   flex 

  `}
`;
const StyleLeftSection = styled.section`
  ${tw`lg:w-4/6 box-border  p-10   `}
`;
const StyleRigthtSection = styled.div`
  & img {
    ${tw`w-80 h-80  `}
  }
`;

const StyledIcon = styled.div`
  ${tw`flex items-center  space-x-4 bg-red-500`}
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
    StyledIcon,
  };
};

export default useShopDetailStyes;
