// Styles
import useStyles from "styles/admin/editProduct.styles";

// Components
import useComponents from "UI/components";

// Logic
import useEditProductApplication from "logic/admin/editProduct/application/editProduct.application";

const EditProduct = () => {
  // Styles
  const { StyledContainer, StyledTitle, StyledForm, StyledRow } = useStyles();

  // Components
  const { Input, Button, TextArea, Select } = useComponents();

  // Logic
  const { register, handleSubmit, onSubmit, categories } =
    useEditProductApplication();

  return (
    <StyledContainer>
      <StyledTitle>Editar producto</StyledTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledRow>
          <Input
            id="name"
            placeholder="Escribe el nombre de tu producto"
            textLabel="Nombre del producto"
            required
            register={register}
          />
        </StyledRow>

        <StyledRow>
          <Input
            id="brand"
            placeholder="Escribe el nombre de la marca"
            textLabel="Nombre de la marca"
            required
            register={register}
          />
        </StyledRow>

        <StyledRow>
          <TextArea
            id="description"
            placeholder="Escribe una descripcion de tu producto"
            textLabel="Descripcion"
            required
            register={register}
          />
        </StyledRow>

        <StyledRow>
          <Select
            id="category"
            placeholder="Escribe una descripcion de tu producto"
            textLabel="Categorias"
            required
            register={register}
            options={categories}
          />
        </StyledRow>

        <StyledRow>
          <Input
            id="price"
            placeholder="$"
            textLabel="Escribe el precio unitario del producto"
            required
            register={register}
          />
        </StyledRow>

        <Button text="Guardar"></Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default EditProduct;
