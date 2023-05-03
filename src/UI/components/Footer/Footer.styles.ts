import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom"; //etiqueta a html

const Styledlogo = styled.img`
  ${tw`w-56 h-24`}
`;

const StyledContainerLogo = styled.div`
  ${tw`flex items-center justify-center w-full`}
`;

const StyledFooter = styled.footer`
  ${tw`box-border px-8 py-4 bg-primary`}
`;

const StyledBody = styled.article`
  ${tw` w-full grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-[1280px] mx-auto 
  `}
`;

const StyledCol = styled.ul`
  ${tw`w-full p-0 list-none`}
`;

const StyledLink = styled(Link)`
  ${tw`text-white no-underline cursor-pointer `}
`;

const StyledRow = styled.li`
  ${tw`flex items-center justify-center w-full`}
`;

const StyledIcon = styled.div`
  ${tw`flex items-center justify-center space-x-4`}
`;

const StyledInfoLegal = styled.div`
  ${tw`grid justify-end w-full grid-cols-1 gap-4 lg:grid-cols-2`}
`;

const StyledListLinks = styled.div`
  ${tw`flex flex-row flex-wrap justify-center w-full gap-2.5`}
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
    StyledListLinks,
    StyledContainerLogo,
    StyledRow,
  };
};
export default useFooterStyles;
