// Packages
import { FC } from "react";

// Stlyes
import useStyles from "./modal.styles";

interface Props {
  children: any;
  onClose: () => void;
}

const Modal: FC<Props> = ({ children, onClose }) => {
  // Styles
  const { StyledContainer, StyledDecorationModal } = useStyles();

  return (
    <StyledContainer>
      <StyledDecorationModal onClick={onClose} />

      {children}
    </StyledContainer>
  );
};

export default Modal;
