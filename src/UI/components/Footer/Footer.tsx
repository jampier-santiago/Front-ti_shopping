import useFooterStyles from "./Footer.styles";

//ASSETS
import logo from "../../../assets/img/Logo_TI_Shopping.png";
import iconFacebook from "../../../assets/icons/Logo-facebook.png";
import iconTwitter from "../../../assets/icons/Logo-twitter.png";
import iconInstagram from "../../../assets/icons/Logo-instagram.png";

const Footer = () => {
  const {
    Styledlogo,
    StyledFooter,
    StyledBody,
    StyledCol,
    StyledLink,
    StyledIcon,
    StyledInfoLegal,
    StyledListLinks,
    StyledContainerLogo,
    StyledRow,
  } = useFooterStyles();

  return (
    <StyledFooter>
      <StyledBody>
        <StyledContainerLogo>
          <Styledlogo src={logo} alt="logo_Ti_Shopping" />
        </StyledContainerLogo>

        <StyledCol>
          <StyledRow>
            <StyledLink to="#">Home</StyledLink>
          </StyledRow>
          <StyledRow>
            <StyledLink to="#">Destacados</StyledLink>
          </StyledRow>
          <StyledRow>
            <StyledLink to="#">Novedades</StyledLink>
          </StyledRow>
          <StyledRow>
            <StyledLink to="#">Ofertas</StyledLink>
          </StyledRow>
        </StyledCol>

        <StyledCol>
          <StyledRow>
            <StyledLink to="#">Legal</StyledLink>
          </StyledRow>
          <StyledRow>
            <StyledLink to="#">Terminos y Condiciones</StyledLink>
          </StyledRow>
          <StyledRow>
            <StyledLink to="#">Politicas de Privacidad</StyledLink>
          </StyledRow>
        </StyledCol>

        <StyledCol>
          <StyledRow>
            <StyledLink to="#">Contacto</StyledLink>
          </StyledRow>
          <StyledRow>
            <StyledLink to="#">info@itshopping.com.co</StyledLink>
          </StyledRow>
        </StyledCol>
      </StyledBody>
      <hr />
      <StyledInfoLegal>
        <StyledListLinks>
          <StyledLink to="#">License</StyledLink>
          <StyledLink to="#">Privacy</StyledLink>
          <StyledLink to="#">terms</StyledLink>
          <StyledLink to="#">©2023 All rights reserved</StyledLink>
        </StyledListLinks>
        <StyledIcon>
          <img src={iconFacebook} alt="Logo-Facebook" />
          <img src={iconTwitter} alt="Logo-Twitter" />
          <img src={iconInstagram} alt="Logo-Instagram" />
        </StyledIcon>
      </StyledInfoLegal>
    </StyledFooter>
  );
};

export default Footer;
