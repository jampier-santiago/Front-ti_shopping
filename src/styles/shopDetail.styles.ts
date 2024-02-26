import styled from "styled-components";
import tw from "twin.macro";

const StyledDiv = styled.div`
  ${tw`w-full`}
`;

const StyleMain = styled.header`
  ${tw`relative flex items-center justify-center w-full overflow-hidden text-red-500 bg-white `}
`;

const StyleDecorationHero = styled.div`
  ${tw`absolute top-0 bottom-0 left-0 right-0 bg-black `}
`;

const StyleSquareShop = styled.div`
  ${tw`bg-center bg-cover cursor-pointer w-80 rounded-xl `}
`;

const StyleSectionShop = styled.section`
  ${tw`grid max-w-screen-lg grid-cols-3 mx-auto `}
`;

const StyleTittle = styled.h1`
  ${tw`flex justify-center text-5xl text-black `}
`;

const StyleSubTittle = styled.h2`
  ${tw`flex text-black `}
`;
const StyleLeftSection = styled.section`
  ${tw`box-border p-10 lg:w-4/6 `}
`;
const StyleRigthtSection = styled.div`
  & img {
    ${tw`w-80 h-80 `}
  }
`;

const StyledIcon = styled.div`
  ${tw`flex items-center space-x-4 bg-red-500`}
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
