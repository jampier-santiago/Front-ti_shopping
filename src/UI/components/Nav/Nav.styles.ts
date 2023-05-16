import styled from "styled-components";
import tw from "twin.macro";

import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  ${tw`z-10 bg-transparent`}
`;
const Styledlogo = styled.img`
  ${tw`h-12 cursor-pointer lg:h-16`}
`;
const StyledLink = styled(Link)<{ hidden?: boolean }>`
  ${tw`mx-0 my-10 text-black no-underline cursor-pointer lg:m-10 hover:underline hover:font-semibold`}
  ${({ hidden }) => hidden && tw`hidden lg:block`}
`;
const StyledCol = styled.ul`
  ${tw`flex flex-col justify-center list-none px-7 lg:flex-row `}
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
  ${tw`items-center hidden gap-4 lg:flex`}
`;
const StyledCar = styled.img`
  ${tw`cursor-pointer `}
`;

const StyledModal = styled.article`
  ${tw`absolute left-0 shadow-2xl right-0 z-40 duration-75 ease-in-out bg-white box-border py-3.5 top-[53px]`}
`;

const StyledIconMenu = styled.img`
  ${tw`w-6 h-6 cursor-pointer lg:hidden`}
`;

const StyledModalShoppingCart = styled.article`
  ${tw`w-3/5 bg-white h-3/5 z-[101]`}

  & h3 {
    ${tw`text-2xl font-medium text-center`}
  }
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
    StyledModalShoppingCart,
  };
};

export default useNavStyles;
