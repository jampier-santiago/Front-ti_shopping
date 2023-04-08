import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const StyledContainer = styled.article`
  ${tw`box-border h-screen px-3 py-6 bg-primary`}
`;

const StyledContainerAvatar = styled.div`
  ${tw`w-24 h-24 mx-auto mb-7`}
`;

const StylyedIcon = styled.span`
  ${tw`flex items-center justify-center w-full h-full bg-[#E8E8E6] rounded-full text-4xl font-black tracking-widest`}
`;

const StyledContainerLinks = styled.ul`
  ${tw`flex flex-col justify-center w-full p-0 m-0 h-3/5`}
`;

const StyledLi = styled.li`
  ${tw`p-0 m-0 list-none mb-1.5 w-full`}
`;

const StyledLink = styled(Link)`
  ${tw`block mx-auto text-base font-semibold text-center text-black no-underline`}

  &:hover {
    ${tw`text-white`}
  }
`;

const StyledBottomContainer = styled.div`
  ${tw`w-full mt-7`}
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
  };
};

export default useStyles;
