import styled from 'styled-components';

export const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

export const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

export const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-color: #000;
    background-size: cover;
    opacity: 0.5;
    background-repeat: no-repeat;
    background-image: url("https://cutewallpaper.org/21/space-wallpaper-gif/Heres-the-first-GIF-to-go-to-space-The-Daily-Dot.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;
export const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    transition: 0.9s;
    transition-timing-function: ease-out;
    width: 100%;
`;

export const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    &:hover {
        box-shadow: white 0px 40px 58px -16px,
            rgb(0 0 0) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        transition: 0.9s;
        transition-timing-function: ease-out;
        video {
            opacity: 1;
        }
`;

export const SignUp = styled.a`
    font-weight: bold;
    color: rgb(255, 172, 28);
    background-color: navy;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.9s;
    transition-timing-function: ease-out;

    &:hover {
        background-color: white;
        transition:0.5s;
        transition-timing-function: ease-out;
        
    }
`;

export const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 15px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-weight: bold;
    width: 100%;
    font-family: 'Roboto', sans-serif;
`;

export const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
   
    border-radius: 25px;

    &:hover {
        transition:0.5s;
        transition-timing-function: ease-out;
        
    }

`;
