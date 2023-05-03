// Packages
import styled from "styled-components/macro";
import tw from "twin.macro";

// Components
import Button from "UI/components/Button";

const StyledMain = styled.main`
  ${tw`box-border w-full px-6 py-10`}
`;

const StyledTitle = styled.h1`
  ${tw`text-3xl font-bold text-center`}
`;

const StyledForm = styled.form`
  ${tw`box-border flex flex-col w-full gap-3 mx-auto mb-6 lg:w-2/4`}
`;

const StyledButton = styled(Button)`
  ${tw`block w-full mx-auto lg:w-2/4`}
`;

const StyledContainerButtons = styled.div`
  ${tw`flex items-center justify-between w-full gap-4`}
`;

const StyledErrors = styled.span`
  ${tw`text-2xl font-semibold text-red-500`}
`;

const useUserStyles = () => {
  return {
    StyledMain,
    StyledTitle,
    StyledForm,
    StyledButton,
    StyledContainerButtons,
    StyledErrors,
  };
};

export default useUserStyles;
