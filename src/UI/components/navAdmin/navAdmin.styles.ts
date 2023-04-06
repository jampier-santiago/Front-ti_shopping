import styled from "styled-components/macro";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const StyledContainer = styled.article`
  ${tw`box-border relative flex items-center justify-between w-full px-6 py-6 lg:px-3 lg:flex-col lg:w-auto lg:h-screen bg-primary`}
`;

const StyledContainerAvatar = styled.div`
  ${tw`w-12 h-12 lg:mx-auto lg:w-24 lg:h-24 lg:mb-7`}
`;

const StylyedIcon = styled.span`
  ${tw`flex items-center justify-center w-full h-full bg-[#E8E8E6] rounded-full text-2xl lg:text-4xl font-black tracking-widest`}
`;

const StyledContainerLinks = styled.ul<{ desktop?: boolean }>`
  ${tw`flex-col justify-center w-full p-0 m-0 `}

  ${({ desktop }) => (desktop ? tw`hidden lg:flex` : tw`flex`)}
`;

const StyledLi = styled.li`
  ${tw`p-0 m-0 list-none mb-1.5 w-full`}
`;

const StyledLink = styled(Link)`
  ${tw`block mx-auto text-xl font-semibold text-center text-black no-underline`}

  &:hover {
    ${tw`text-white`}
  }
`;

const StyledBottomContainer = styled.div`
  ${tw`hidden w-full mt-7 lg:block`}
`;

const StyledIconMenu = styled.div`
  ${tw`cursor-pointer lg:hidden`}
`;

const StyledModal = styled.article`
  ${tw`absolute left-0 right-0 z-40 duration-75 ease-in-out bg-primary box-border py-3.5 top-24`}
`;

const useStyles = () => {
  return {
    StyledContainer,
    StyledContainerAvatar,
    StylyedIcon,
    StyledContainerLinks,
    StyledBottomContainer,
    StyledLink,
    StyledLi,
    StyledIconMenu,
    StyledModal,
  };
};

export default useStyles;
