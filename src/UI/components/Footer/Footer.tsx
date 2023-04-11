import useFooterStyles from "./Footer.styles";

//ASSETS
import logo from "../../../assets/img/Logo_TI_Shopping.png";
import iconFacebook from "../../../assets/Icons/Logo-facebook.png";
import iconTwitter from "../../../assets/Icons/Logo-twitter.png";
import iconInstagram from "../../../assets/Icons/Logo-instagram.png";

const Footer = () => {
  const {
    Styledlogo,
    StyledFooter,
    StyledBody,
    StyledCol,
    StyledLink,
    StyledIcon,
    StyledInfoLegal,
  } = useFooterStyles();

  return (
    <StyledFooter>
      <StyledBody>
        <article>
          <Styledlogo src={logo} alt="logo_Ti_Shopping" />
        </article>

        <StyledCol>
          <li>
            <StyledLink href="#">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Destacados</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Novedades</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Ofertas</StyledLink>
          </li>
        </StyledCol>

        <StyledCol>
          <li>
            <StyledLink href="#">Legal</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Terminos y Condiciones</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Politicas de Privacidad</StyledLink>
          </li>
        </StyledCol>

        <StyledCol>
          <li>
            <StyledLink href="#">Contacto</StyledLink>
          </li>
          <li>
            <StyledLink href="#">info@itshopping.com.co</StyledLink>
          </li>
        </StyledCol>
      </StyledBody>
      <hr />
      <StyledInfoLegal>
        <div>
          <StyledLink href="#">License</StyledLink>
          <StyledLink href="#">Privacy</StyledLink>
          <StyledLink href="#">terms</StyledLink>
          <StyledLink href="#">©2023 All rights reserved</StyledLink>
        </div>
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
