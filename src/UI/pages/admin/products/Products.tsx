// Styles
import useStyles from "styles";

// Components
import useComponents from "UI/components";

// Controllers
import useProductsAdminApplication from "logic/admin/products/application/products.application";

// Assets
import iconDelete from "assets/icons/icon-basura.svg";
import iconEdit from "assets/icons/icon-editar.svg";

const Products = () => {
  // Styles
  const { useProductsdminStyles } = useStyles();
  const {
    StyledMain,
    StyledTitle,
    StledContainerProducts,
    StyledRow,
    StyledNameProduct,
    StyledIcon,
    StyledContainerIcons,
    StyledContainerEmptyProducts,
    StyledTitleEmptyProducts,
  } = useProductsdminStyles();

  // Components
  const { Toast, Button } = useComponents();

  // Controllers
  const {
    products,
    handleStateModal,
    showToast,
    setShowToast,
    goToEdit,
    goToMakeProduct,
  } = useProductsAdminApplication();

  return (
    <StyledMain>
      {showToast && (
        <Toast
          close={() => setShowToast(false)}
          variant="success"
          timeHidden={5000}
        >
          <span>El producto fue eliminado con exito</span>
        </Toast>
      )}

      <StyledTitle>Tus productos</StyledTitle>

      <StledContainerProducts>
        {products.length > 0 ? (
          products.map((product) => (
            <StyledRow key={product.id}>
              <StyledNameProduct>
                {product.name.length > 20
                  ? `${product.name.substring(0, 19)}...`
                  : product.name}
              </StyledNameProduct>

              <StyledContainerIcons>
                <StyledIcon
                  src={iconEdit}
                  alt="Icono de un lapiz"
                  title="Icono de un lapiz"
                  onClick={() => goToEdit(product.id)}
                />

                <StyledIcon
                  onClick={() => handleStateModal(product.name, product.id)}
                  src={iconDelete}
                  alt="Icono de una caneca de basura"
                  title="Icono de una caneca de basura"
                />
              </StyledContainerIcons>
            </StyledRow>
          ))
        ) : (
          <StyledContainerEmptyProducts>
            <StyledTitleEmptyProducts>
              No tienes creado aun nigun producto
            </StyledTitleEmptyProducts>

            <Button text="Crear producto" onClick={goToMakeProduct}></Button>
          </StyledContainerEmptyProducts>
        )}
      </StledContainerProducts>
    </StyledMain>
  );
};

export default Products;
