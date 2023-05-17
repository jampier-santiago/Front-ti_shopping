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
  ${tw`w-2/5 bg-white h-3/5 max-h-[500px] overflow-y-auto z-[101] rounded-2xl shadow-2xl`}

  & h3 {
    ${tw`text-2xl font-medium text-center`}
  }
`;

const StyledContainerProducts = styled.div`
  ${tw`box-border w-full px-8 mt-5`}
`;

const StyledRow = styled.div`
  ${tw`box-border flex items-center justify-between w-full px-2 py-3 mb-4 border-t-0 border-b-2 border-l-0 border-r-0 border-solid border-b-primary-200`}

  & h4 {
    ${tw`text-lg font-semibold mb-1.5`}
  }

  $ span {
    ${tw`text-sm font-medium`}
  }
`;

const StyledContainerButton = styled.div`
  ${tw`max-w-[200px] mx-auto box-border pb-3.5 mt-16`}
`;

const StyledControlsRow = styled.div`
  ${tw`flex items-center gap-3`}

  & button {
    ${tw`cursor-pointer`}
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
    StyledContainerProducts,
    StyledRow,
    StyledContainerButton,
    StyledControlsRow,
  };
};

export default useNavStyles;
