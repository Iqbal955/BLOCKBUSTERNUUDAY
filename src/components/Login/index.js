import { Link } from "react-router-dom";
import {
  Container,
  Content,
  CTA,
  CTALogoOne,
  SignUp,
  Description,
  CTALogoTwo,
  BgImage,
} from "./StyledLogoElements";

{
  /*
//The login component is a stateless component. It does not have any state. It only renders the login form. The login form is a stateless component.
 It does not have any state. It only renders the login form. 

*/
}

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne
            src="https://theme.zdassets.com/theme_assets/1092563/a245708927603119f60e2b304894e844a57d6839.png"
            alt=""
          />
          <SignUp>
            <Link to="/home">UDFORSK BLOCKBUSTER UNIVERSET</Link>
          </SignUp>

          <Description>
            DE FEDESTE FILM, DE FEDESTE SERIER, DEN FEDESTE KINO
          </Description>

          <CTALogoTwo src="https://www.pikpng.com/pngl/b/197-1971500_find-the-best-film-tv-and-video-production.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
