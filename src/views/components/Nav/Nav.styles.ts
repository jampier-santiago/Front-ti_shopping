import styled from "styled-components";
import tw from "twin.macro";

const StyledNav = styled.nav`
  ${tw`grid grid-cols-2 inline-block container bg-transparent`}
`;
const Styledlogo = styled.img`
  ${tw`w-28 h-12 w-1/5 clear-left`}
`;

const StyledLink = styled.a`
  ${tw` no-underline text-white m-2 `}
`;
const StyledCol = styled.ul`
  ${tw`w-4/5 list-none`}
`;
const StyledCollis = styled.li`
  ${tw`inline-block`}
`;

const useNavStyles = () => {
  return { Styledlogo, StyledNav, StyledLink, StyledCol, StyledCollis };
};

export default useNavStyles;
