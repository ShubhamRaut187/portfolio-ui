// #region Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React,{useEffect, useRef} from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';

// MUI Icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ImageContainer from '../../components/ImageContainer';
// endregion

gsap.registerPlugin(ScrollTrigger);

// #region Styled Components
const StyledPageWrapper = styled.div`
     margin: 80px auto 150px auto;
    width: 85%;
    @media screen and (min-width:768px) and (max-width:1024px){
       width: 90%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 90%;
    }
`;

const StyledInformationWrapper = styled.div`
    align-items: center;
    background: linear-gradient(to right, #d9d9d91f, #7373731f) !important;
    border-radius: 8px;
    display: flex;
    height: 400px;
    justify-content: space-around;
    margin: 20px auto;
    width: 100%;
    
    @media screen and (min-width:768px) and (max-width:1024px){
       height: 400px;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        height: 1000px;
    }
`;

const StyledImagesContainer = styled.div`
    border-radius: 20px;
    height: 300px;
    width: 40%;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 30%;
        width: 90%;
    }
`;

const StyledInfoContainer = styled.div`
    border-radius: 20px;
    height: 300px;
    width: 50%;
    @media screen and (min-width:768px) and (max-width:1024px){
       overflow-y: auto;
       scrollbar-width: none;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        height: 50% !important;
        width: 90%; 
    }
`;

const StyledButton = styled(Button)`
    background-color: #E51C4A !important;
    border-color: #E51C4A !important;
    box-shadow: none !important;
    color: #FFFFFF;
    font-family: "Kumbh Sans", serif !important;
    margin-top: 20px !important; 
    text-transform: none !important;
`;
// endregion

// #region Component
const About: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    // Typewritter effect
    const [typeEffect] = useTypewriter({
        words:['Engineer...', 'Explorer...', 'Traveller...', 'Foodie...'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 100,

    });

    useEffect(() => {
        if (ref.current) {
             gsap.fromTo(
                ref.current,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        }
    }, []);

  return (
    <StyledPageWrapper ref={ref}>
        <Typography variant='h3' component='div' sx={{ color: '#FFFFFF', fontWeight: 600}}>
            Know more about me
        </Typography>
        <StyledInformationWrapper>
            <StyledImagesContainer>
                <ImageContainer
                  source={'https://sagarmude.netlify.app/static/media/avatar.711110cc.svg'}
                  width='100%'
                  height='100%'
                  imageName='avatar'
                  borderradius={'20px'}
                />
            </StyledImagesContainer>
            <StyledInfoContainer>
                <Typography variant='h5' component='div' sx={{ color: '#E51C4A', fontWeight: 600, marginBottom: '10px'}}>
                   <span style={{ color: '#FFFFFF'}}>Developer, Thinker, </span>{typeEffect}
                </Typography>
                <Typography variant='body1' component='div' sx={{ color: '#808080', textAlign: 'justify' }}>
                    Hi, I’m <span style={{ color: '#E51C4A', fontWeight: 700}}>Shubham Raut,</span> a 25-year-old full-stack developer based in Pune, India. With a passion for technology and problem-solving, I thrive on exploring innovative solutions and staying updated with the latest trends in the tech world. Beyond coding, I enjoy engaging in meaningful discussions about current events in technology and the world at large. I’m an avid traveler, always eager to explore the diverse beauty and culture of my country, India. My journey is fueled by a desire to grow both personally and professionally while making a meaningful impact through my work.
                </Typography>
                <StyledButton variant='contained'>
                    <EmailOutlinedIcon sx={{ marginRight: '20px'}}/>
                    Get in touch
                </StyledButton>
            </StyledInfoContainer>
        </StyledInformationWrapper>
    </StyledPageWrapper>
  )
}
// endregion
export default About;