import styled from "styled-components";
import tw from "twin.macro";

const StyledContainerSlider = styled.article`
  ${tw`bg-blue-100 flex overflow-hidden w-full h-[200px] lg:w-[600px] lg:h-[500px]`}
`;

const StyledViewSlider = styled.article`
  ${tw`w-full h-full bg-green-300 flex-shrink-0`}
`;

const StyleMain = styled.main`
  ${tw`w-full flex gap-28 box-border px-12 flex-col lg:flex-row`}
`;

const StyleArticle = styled.article`
  ${tw` bg-blue-300 w-full h-full lg:w-[600px] lg:h-[500px]`}
`;

const StyleIcon = styled.div`
  ${tw` text-while `}
`;

const StyleText = styled.text`
  ${tw`text-black text-2xl font-bold flex justify-center`}
`;

const Styletitle = styled.h1`
  ${tw`text-black text-2xl font-bold flex justify-center`}
`;

const StyleParagraph = styled.p`
  ${tw`text-black text-2xl lg:[font-family: 10px] [font-family: 4px]`}
`;

const StyleButton = styled.button`
  ${tw` px-4 py-2 text-lg font-bold text-center uppercase bg-blue-500  rounded-md shadow-md transition-colors duration-300 ease-in-out relative  flex justify-center`}

  &:hover {
    ${tw`bg-blue-200 cursor-pointer`}
  }
`;

const StyledButtonNext = styled.button`
  ${tw`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
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
  };
};

export default useProductDetail;
