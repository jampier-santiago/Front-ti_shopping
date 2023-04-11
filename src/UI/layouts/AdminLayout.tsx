// Packages
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Components
import useComponents from "UI/components";

interface Props {
  children: any;
}

const StyledContainer = styled.main`
  ${tw`box-border flex flex-col w-full lg:flex-row flex-nowrap`}
`;

const AdminLayout: FC<Props> = ({ children }) => {
  const { NavAdmin, Footer } = useComponents();

  return (
    <>
      <StyledContainer>
        <NavAdmin />
        {children}
      </StyledContainer>
      <Footer></Footer>
    </>
  );
};

export default AdminLayout;
