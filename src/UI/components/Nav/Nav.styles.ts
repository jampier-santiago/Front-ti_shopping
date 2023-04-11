import styled from "styled-components";
import tw from "twin.macro";

const StyledNav = styled.nav`
  ${tw` bg-transparent`}
`;
const Styledlogo = styled.img`
  ${tw`lg:h-24  lg:w-48 
          h-12 w-24 cursor-pointer`}
`;
const StyledLink = styled.a<{ hidden?: boolean }>`
  ${tw` no-underline text-white m-10 text-black cursor-pointer`}
  ${({ hidden }) => hidden && tw` hidden lg:block`}
`;
const StyledCol = styled.ul`
  ${tw`flex flex-col lg:flex-row justify-center list-none `}
`;
const StyledCollis = styled.li`
  ${tw`inline-block cursor-pointer`}
`;
const Styledhr = styled.hr`
  ${tw` bg-black`}
`;
const StyledHeader = styled.header`
  ${tw` flex justify-between items-center px-7 box-border `}
`;
const StyledActionHeader = styled.div`
  ${tw` flex gap-4 items-center `}
`;
const StyledCar = styled.img`
  ${tw` cursor-pointer`}
`;

const StyledModal = styled.article`
  ${tw`absolute left-0 right-0 z-40 duration-75 
  ease-in-out bg-primary box-border py-3.5 top-24 `}
`;

const StyledIconMenu = styled.img`
  ${tw` cursor-pointer lg:hidden`}
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
