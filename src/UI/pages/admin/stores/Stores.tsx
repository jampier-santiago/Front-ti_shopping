// Packages
import { FC } from "react";

// Controllers
import useStoresApplication from "logic/admin/stores/application/stores.application";

// Components
import useComponents from "UI/components";

// Styles
import useStyles from "styles/admin/stores.styles";

const Stores: FC = () => {
  // Styles
  const { StyledBody, StyledButtonRow, StyledMain, StyledRow, StyledTitle } =
    useStyles();

  // Components
  const { Toast } = useComponents();

  // Controllers
  const { stores, deleteStore, setshowToast, infoToast, showToast } =
    useStoresApplication();

  return (
    <>
      {showToast && (
        <Toast
          variant={infoToast.state}
          timeHidden={2000}
          close={() => setshowToast(false)}
        >
          {infoToast.msg}
        </Toast>
      )}

      <StyledMain>
        <StyledTitle>Todos nuestros aliados</StyledTitle>

        <StyledBody>
          {stores.length > 0 &&
            stores.map((store) => (
              <StyledRow key={store.Id_stores}>
                <span>{store.name_store}</span>

                <StyledButtonRow
                  active={store.state === 0}
                  onClick={() => deleteStore(store.Id_stores)}
                >
                  {store.state === 0 ? "Activar" : "Desactivar"}
                </StyledButtonRow>
              </StyledRow>
            ))}
        </StyledBody>
      </StyledMain>
    </>
  );
};

export default Stores;
