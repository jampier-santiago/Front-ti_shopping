import styled from "styled-components";
import tw from "twin.macro";

const StyledNav = styled.nav`
  ${tw`bg-transparent `}
`;
const Styledlogo = styled.img`
  ${tw`w-24 h-12 cursor-pointer lg:h-24 lg:w-48`}
`;
const StyledLink = styled.a<{ hidden?: boolean }>`
  ${tw`m-10 text-black no-underline cursor-pointer `}
  ${({ hidden }) => hidden && tw`hidden lg:block`}
`;
const StyledCol = styled.ul`
  ${tw`flex flex-col justify-center list-none lg:flex-row `}
`;
const StyledCollis = styled.li`
  ${tw`inline-block cursor-pointer`}
`;
const Styledhr = styled.hr`
  ${tw`bg-black `}
`;
const StyledHeader = styled.header`
  ${tw`box-border flex items-center justify-between px-7`}
`;
const StyledActionHeader = styled.div`
  ${tw`flex items-center gap-4 `}
`;
const StyledCar = styled.img`
  ${tw`cursor-pointer `}
`;

const StyledModal = styled.article`
  ${tw`absolute left-0 right-0 z-40 duration-75 
  ease-in-out bg-primary box-border py-3.5 top-24 `}
`;

const StyledIconMenu = styled.img`
  ${tw`cursor-pointer lg:hidden`}
`;

const useNavStyles = () => {
  return {
    Styledlogo,
    StyledNav,
    StyledLink,
    StyledCol,
    StyledCollis,
    Styledhr,
    StyledHeader,
    StyledActionHeader,
    StyledCar,
    StyledModal,
    StyledIconMenu,
  };
};

export default useNavStyles;
