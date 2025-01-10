import React,{useEffect, useRef} from 'react'
import styled from 'styled-components';
import { Typography, Button } from '@mui/material'; 
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ImageContainer from '../../components/ImageContainer';
import { useTypewriter } from 'react-simple-typewriter';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledPageWrapper = styled.div`
    width: 85%;
    margin: 80px auto 150px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
       width: 90%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 90%;
    }
`;

const StyledInformationWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 400px;
    border-radius: 20px;
    background: linear-gradient(to right, #d9d9d91f, #7373731f) !important;
    margin: 20px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
       height: 400px;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        height: 1000px;
    }
`;

const StyledImagesContainer = styled.div`
    width: 40%;
    height: 300px;
    border-radius: 20px;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 90%;
        height: 30%;
    }
`;

const StyledInfoContainer = styled.div`
    width: 50%;
    height: 300px;
    border-radius: 20px;
    @media screen and (min-width:768px) and (max-width:1024px){
       overflow-y: auto;
       scrollbar-width: none;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        width: 90%;
        height: 50% !important;
    }
`;

const StyledButton = styled(Button)`
    text-transform: none !important;
    border-color: #E51C4A !important;
    background-color: #E51C4A !important;
    color: #FFFFFF;
    font-family: "Kumbh Sans", serif !important;
    margin-top: 10px !important;
    box-shadow: none !important;
`;

const About: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
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
        <Typography variant='h3' component='div' sx={{ color: '#808080', fontWeight: 600}}>
            More about me 
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
                <Typography variant='h4' component='div' sx={{ color: '#E51C4A', fontWeight: 600, marginBottom: '10px'}}>
                   <span style={{ color: '#808080'}}>Developer, Thinker, </span>{typeEffect}
                </Typography>
                <Typography variant='body1' component='div' sx={{ color: '#FFFFFF' }}>
                    Hi, I’m <span style={{ color: '#E51C4A', fontWeight: 700}}>Shubham Raut,</span> a 23-year-old full-stack developer based in Pune, India. With a passion for technology and problem-solving, I thrive on exploring innovative solutions and staying updated with the latest trends in the tech world. Beyond coding, I enjoy engaging in meaningful discussions about current events in technology and the world at large. I’m an avid traveler, always eager to explore the diverse beauty and culture of my country, India. My journey is fueled by a desire to grow both personally and professionally while making a meaningful impact through my work.
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

export default About;