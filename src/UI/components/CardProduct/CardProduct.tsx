// Packages
import { FC } from "react";
import { useNavigate } from "react-router-dom";

// Interfaces
import { Props } from "./interfaces";

// Components
import Button from "../Button";

// Styles
import useCardProductStyles from "./cardProduct.styles";

const CardProduct: FC<Props> = ({ action, id, image, name, urlSee, price }) => {
  const navigate = useNavigate();

  // Styles
  const { StyledCardProduct, StyledRowButtonCard } = useCardProductStyles();

  return (
    <StyledCardProduct key={id}>
      <h3>{name}</h3>

      <img src={image} alt={name} />

      <h3>$ {price}</h3>

      <StyledRowButtonCard>
        <Button text="Ver" onClick={() => navigate(urlSee)}></Button>
        <Button text="Comprar" onClick={() => action(id)}></Button>
      </StyledRowButtonCard>
    </StyledCardProduct>
  );
};

export default CardProduct;
