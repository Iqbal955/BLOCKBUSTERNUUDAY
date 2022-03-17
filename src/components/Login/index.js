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

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="https://theme.zdassets.com/theme_assets/1092563/a245708927603119f60e2b304894e844a57d6839.png" alt=""/>
                    <SignUp>UDFORSK BLOCKBUSTER UNIVERSET</SignUp>
                    <Description>
                     DE FEDESTE FILM, DE FEDESTE SERIER, 
                  
                     DEN FEDESTE KINO
                    </Description>
                    <Link to="/movies"> 
                    
                    <CTALogoTwo src="https://www.pikpng.com/pngl/b/197-1971500_find-the-best-film-tv-and-video-production.png" />
                    </Link>
                   
                   
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}

export default Login;