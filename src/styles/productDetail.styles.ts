import styled from "styled-components";
import tw from "twin.macro";

const StyledContainerSlider = styled.article`
  ${tw`flex w-full h-full overflow-hidden bg-blue-100 `}
`;

const StyledBody = styled.section`
  ${tw`box-border grid w-full grid-cols-1 gap-10 px-12 lg:grid-cols-2`}
`;

const StyledViewSlider = styled.article`
  ${tw`flex-shrink-0 w-full h-full bg-while bg-center bg-contain bg-no-repeat`}
`;

const StyledSectionImages = styled.div`
  ${tw`w-full h-full`}

  & img {
    ${tw`w-full h-full max-w-[250px] max-h-[250px] lg:max-w-[500px] lg:max-h-[250px]`}
  }
`;

const StyleMain = styled.section`
  ${tw`box-border`}
`;

const StyleArticle = styled.article`
  ${tw`w-full bg-blue-300 `}
`;

const StyleIcon = styled.div`
  ${tw` text-while`}
`;

const StyleText = styled.text`
  ${tw`flex justify-center text-2xl font-bold text-black`}
`;

const Styletitle = styled.h1`
  ${tw`flex justify-center text-2xl font-bold text-black`}
`;

const StyleParagraph = styled.p`
  ${tw`text-black text-2xl lg:[font-family: 10px] [font-family: 4px]`}
`;

const StyleButton = styled.button`
  ${tw`relative flex justify-center px-4 py-2 text-lg font-bold text-center uppercase transition-colors duration-300 ease-in-out bg-blue-500 rounded-md shadow-md `}

  &:hover {
    ${tw`bg-blue-200 cursor-pointer`}
  }
`;

const StyledButtonNext = styled.button`
  ${tw`inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded hover:bg-gray-300`}
  span {
    ${tw`mr-2`}
  }
`;

const useProductDetail = () => {
  return {
    StyledContainerSlider,
    StyledViewSlider,
    StyleMain,
    StyleArticle,
    StyleIcon,
    StyleText,
    Styletitle,
    StyleParagraph,
    StyleButton,
    StyledButtonNext,
    StyledBody,
    StyledSectionImages,
  };
};

export default useProductDetail;
