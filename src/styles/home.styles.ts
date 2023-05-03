import styled from "styled-components";
import tw from "twin.macro";

const StylesInfoContent = styled.div`
  ${tw`mx-auto flex justify-center items-center relative `}
`;
const StyledInfoContentDiv = styled.div`
  ${tw`bg-white absolute top-0 left-0 right-0 bottom-0`}
  &:after {
    content: " ";
    border-top: 100vh solid #008ce6;
    border-right: 100vw solid transparent;
    width: 0;
    position: absolute;
  }
`;

const StyledMain = styled.main`
  ${tw``}
`;
const StylesTitle = styled.div`
  ${tw`w-[700px] z-10`}
`;
const StyledTitleH1 = styled.h1`
  ${tw`flex justify-center`}
`;
const StyledinfoH2 = styled.h2`
  ${tw` text-white `}
`;
const StyledTitleSpan = styled.span`
  ${tw`text-white`}
`;

const StyledImgInfo = styled.img`
  ${tw`hidden lg:flex`}
`;

const StyledCardContenDiv = styled.div`
  ${tw`grid grid-cols-4 z-10  `}
`;
const StyledCardDiv = styled.div`
  ${tw`w-1/4 mx-auto mb-20 rounded-lg text-center z-10`}
`;
const StyledFeatureDiv = styled.div`
  ${tw`flex flex-col z-10`}
`;
const StyledFeatureCardDiv = styled.div`
  ${tw`flex justify-center `}
`;
const StyledFeatureP = styled.p`
  ${tw`max-w-[500px]`}
`;

const StyledBotton = styled.div`
  ${tw`flex flex-row w-full  `}
`;

const StyledTitleH2 = styled.h2`
  ${tw`flex justify-center  `}
`;

const StyledLineBr = styled.br`
  ${tw``}
`;

const useHomeStyles = () => {
  return {
    StyledMain,
    StylesTitle,
    StylesInfoContent,
    StyledTitleH1,
    StyledImgInfo,
    StyledTitleSpan,
    StyledinfoH2,
    StyledCardDiv,
    StyledCardContenDiv,
    StyledFeatureDiv,
    StyledBotton,
    StyledFeatureCardDiv,
    StyledFeatureP,
    StyledTitleH2,
    StyledInfoContentDiv,
    StyledLineBr,
  };
};

export default useHomeStyles;
