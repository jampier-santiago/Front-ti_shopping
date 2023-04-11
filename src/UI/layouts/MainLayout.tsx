// Packages
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Components
import useComponents from "UI/components";

interface Props {
  children: any;
}

const MainLayout: FC<Props> = ({ children }) => {
  const { Nav, Footer } = useComponents();

  return (
    <>
      <Nav />
      {children}

      <Footer></Footer>
    </>
  );
};

export default MainLayout;
