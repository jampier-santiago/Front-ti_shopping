// Packages
import { FC } from "react";

// Controllers
import useViewPayApplication from "logic/viewPay/application/viewPay.application";

// Styles
import useViewPayStyle from "styles/viewPay.styles";

// Components
import useComponents from "UI/components";

const ViewPay: FC = () => {
  // Styles
  const {
    StyledContainer,
    StyledTitle,
    StyledSectionError,
    StyledTitleError,
    StyledRow,
    StyledSectionProducts,
    StyledImgProduct,
    StyledSideLeft,
    StyledSideRigth,
    StyledTitleForm,
    StyledRowForm,
  } = useViewPayStyle();

  // Controllers
  const {
    dataProducts,
    register,
    handleSubmit,
    submit,
    showToast,
    finishSale,
    calculteTotal,
  } = useViewPayApplication();

  // Components
  const { Input, Button, Toast } = useComponents();

  return (
    <StyledContainer>
      {showToast && (
        <Toast close={finishSale} timeHidden={3000} variant="success">
          Compra terminada con exito
        </Toast>
      )}

      <StyledTitle>Tus productos</StyledTitle>

      {Object.keys(dataProducts).length > 0 ? (
        <StyledSectionProducts>
          <StyledSideLeft>
            {Object.values(dataProducts).map((product, index) => (
              <div key={Object.keys(dataProducts)[index]}>
                {product.map((prod) => (
                  <StyledRow key={prod.Id_product}>
                    <StyledImgProduct
                      src={prod.image.split(",")[0]}
                      alt={`Imagen de ${prod.Name_product}`}
                    />

                    <div>
                      <h4>{prod.Name_product}</h4>
                      <h4>Cantidad: {prod.amount}</h4>

                      <span>$ {prod.Price}</span>
                    </div>
                  </StyledRow>
                ))}
              </div>
            ))}

            <h3>Total de la compra: $ {calculteTotal(dataProducts)}</h3>
          </StyledSideLeft>

          <StyledSideRigth onSubmit={handleSubmit(submit)}>
            <StyledTitleForm>Terminemos tu venta</StyledTitleForm>

            <StyledRowForm>
              <Input
                id="numberCard"
                placeholder="Escribe el numero de la tarjeta a utilizar"
                register={register}
                textLabel="Numero de la tarjeta"
                type="string"
                required
              ></Input>
            </StyledRowForm>

            <StyledRowForm>
              <Input
                id="cv"
                placeholder="Escribe el codigo de seguridad de la tarjeta"
                register={register}
                textLabel="Codigo de seguridad"
                type="number"
                required
              ></Input>
            </StyledRowForm>

            <StyledRowForm>
              <Input
                id="date"
                placeholder="Escribe la fecha de vencimiento de la tarjeta"
                register={register}
                textLabel="Fecha de vencimineto"
                type="string"
                required
              ></Input>
            </StyledRowForm>

            <StyledRowForm>
              <Button text="Terminar" type="submit" />
            </StyledRowForm>
          </StyledSideRigth>
        </StyledSectionProducts>
      ) : (
        <StyledSectionError>
          <StyledTitleError>
            Lo sentimos, todavía no tienes productos. Selecciona algún producto
            de una tienda para continuar.
          </StyledTitleError>
        </StyledSectionError>
      )}
    </StyledContainer>
  );
};

export default ViewPay;
