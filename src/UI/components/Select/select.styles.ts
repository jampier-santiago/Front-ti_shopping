import styled from "styled-components";
import tw from "twin.macro";

const StylesInput = styled.select<{ dark?: boolean }>`
  ${tw`bg-transparent box-border px-4 py-3 border-[#19191B] border-2 border-solid outline-none`}

  ${({ dark }) => (dark ? tw`text-black` : tw`text-white`)}
`;

const StylesTxtLabel = styled.label`
  ${tw`text-white`}
`;

const StylesRow = styled.div`
  ${tw`flex flex-col w-full gap-2`}
`;

const useStyles = () => {
  return { StylesInput, StylesTxtLabel, StylesRow };
};

export default useStyles;
