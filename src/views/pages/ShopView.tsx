import useViews from "..";
import useStyles from "styles";
import useControllers from "controllers";

const ShopView = () => {
  //components
  const { useComponents } = useViews();
  const { Button, Input } = useComponents();

  //styles
  const { useShopViewStyles } = useStyles();
  const { StyledDiv, StyleMain } = useShopViewStyles();

  //constrollers
  const { useShopViewControllers } = useControllers();
  const {} = useShopViewControllers();

  return (
    <main>
      <StyleMain>Principal</StyleMain>
      <StyledDiv>
        <h1>Hola bb</h1>
      </StyledDiv>
    </main>
  );
};

export default ShopView;
