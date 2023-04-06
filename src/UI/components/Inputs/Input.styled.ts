import styled from "styled-components";
import tw from "twin.macro";

const StylesInput = styled.input`
  ${tw`bg-transparent box-border px-4 py-3 border-[#19191B] border-2 border-solid text-white`}
`;

const StylesTxtLabel = styled.label`
  ${tw`text-white`}
`;

const StylesRow = styled.div`
  ${tw`w-full flex flex-col gap-2`}
`;

const useStyles = () => {
  return { StylesInput, StylesTxtLabel, StylesRow };
};

export default useStyles;
