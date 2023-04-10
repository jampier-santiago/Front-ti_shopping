import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom"; //etiqueta a html

const Styledlogo = styled.img`
  ${tw`w-56 h-24`}
`;
const StyledFooter = styled.footer`
  ${tw`bg-primary box-border px-8 py-4`}
`;
const StyledBody = styled.article`
  ${tw`w-full grid grid-cols-4 gap-5 max-w-[1280px] mx-auto 
  justify-items-center justify-self-center  sm:grid-cols-2  `}
`;
const StyledCol = styled.ul`
  ${tw`w-full list-none `}
`;
const StyledLink = styled.a`
  ${tw` no-underline text-white m-2 `}
`;
const StyledIcon = styled.div`
  ${tw` space-x-4`}
`;

const StyledInfoLegal = styled.div`
  ${tw` w-full grid grid-cols-2 justify-end `}
`;

const useFooterStyles = () => {
  return {
    Styledlogo,
    StyledFooter,
    StyledBody,
    StyledCol,
    StyledLink,
    StyledIcon,
    StyledInfoLegal,
  };
};
export default useFooterStyles;
