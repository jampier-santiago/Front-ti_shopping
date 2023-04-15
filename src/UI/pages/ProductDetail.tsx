import useViews from "..";
import useStyles from "styles";
import { FC } from "react";

const ProductDetail: FC = () => {
  //components
  const { useComponents } = useViews();
  const { Button, Input } = useComponents();

  //styles
  const { useProductDetail } = useStyles();
  const { StyledDiv } = useProductDetail();
  return (
    <main>
      {/* <StyledDiv>Hola</StyledDiv> */}
      <h1>Prueba</h1>
    </main>
  );
};

export default ProductDetail;
