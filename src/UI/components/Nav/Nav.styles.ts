import styled from "styled-components";
import tw from "twin.macro";

const StyledNav = styled.nav`
  ${tw` bg-transparent`}
`;
const Styledlogo = styled.img`
  ${tw`lg:h-24  lg:w-48 
          h-12 w-24 cursor-pointer`}
`;
const StyledLink = styled.a`
  ${tw` no-underline text-white m-10 text-black cursor-pointer hidden lg:block`}
`;
const StyledCol = styled.ul`
  ${tw` flex justify-center list-none `}
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
  };
};

export default useNavStyles;
