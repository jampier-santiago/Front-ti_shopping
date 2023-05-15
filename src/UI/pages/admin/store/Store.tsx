// Packages
import { FC } from "react";

// Styles
import useStyles from "styles/admin/store.styles";

// Logic
import useStoreApplication from "logic/admin/store/application/store.application";

const Store: FC = () => {
  // Styles
  const {
    StyledContianer,
    StyledTitle,
    StyledContainerSales,
    StyledTitleSection,
    StyledSales,
    StyledRowSale,
  } = useStyles();

  // Logic
  const { sales } = useStoreApplication();

  return (
    <StyledContianer>
      <StyledTitle>Informacíon de tu negocio</StyledTitle>

      <StyledContainerSales>
        <StyledTitleSection>Tus ventas</StyledTitleSection>

        <StyledSales>
          {sales.length > 0 ? (
            sales.map((sale, index) => (
              <StyledRowSale key={index}>
                <span>
                  {sale.Date_sales.toString()} ({sale.Hour_sales})
                </span>

                <div>
                  <span>{sale.Name_product} :</span> {sale.amount || 1}
                </div>
              </StyledRowSale>
            ))
          ) : (
            <article>Todavia no tienes registro de ventas</article>
          )}
        </StyledSales>
      </StyledContainerSales>
    </StyledContianer>
  );
};

export default Store;
