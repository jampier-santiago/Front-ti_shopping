import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import tw from "twin.macro";

function App() {
  const StyledForm = styled.nav`
    & {
      ${tw`bg-red-500`}
    }
  `;

  return <StyledForm>HOLA</StyledForm>;
}

export default App;
