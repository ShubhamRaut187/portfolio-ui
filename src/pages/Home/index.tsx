import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useTypewriter } from 'react-simple-typewriter';
import Avatar from './Avatar2.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 600px;
    width: 85%;
    margin: 40px auto;

    @media screen and (min-width:768px) and (max-width:1024px){
        width: 90%;
        height: 500px;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        width: 90%;
        height: 500px;
    }
`;

const StyledHeroDescriptionWrapper = styled.div`
    display: flex;
    width: 55%;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    @media screen and (min-width:768px) and (max-width:1024px){
        width: 70%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        width: 100%;

        & > .profile-title-home {
            font-size: 32px;
        }

        & > .profile-roles-home {
            font-size: 32px;
        }
    }
`;

const StyledHeroAvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    position: relative;

    & > img {
        width: 80%;
        border-radius: 20px;
        transition: transform 0.3s ease;
    }

    @media screen and (min-width:768px) and (max-width:1024px){
       width: 30%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
    }

`;

const StyledSocialMediaIconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 12px;
    cursor: pointer;
`;

const Home: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState<boolean>(false); // Track hover state
    const [typeEffect] = useTypewriter({
        words:['software engineer.','MERN developer.','full stack developer.','react developer.','backend developer.','node.js developer.'],
        loop: true,
        typeSpeed: 200,
        deleteSpeed: 150,

    });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const maxMovement = 45;
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        const xPos = (x / 100) * maxMovement;
        const yPos = (y / 100) * maxMovement;
    
        setPosition({ x: xPos, y: yPos });
      };
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }, []);

    return (
    <StyledPageWrapper id="Home" ref={ref}>
        <StyledHeroDescriptionWrapper>
           <Typography variant='h4' component={'div'} sx={{ color: '#808080', fontWeight: 500}}>
                Hello there,
           </Typography>
           <Typography variant='h3' component={'div'} sx={{ color: '#E51C4A', fontWeight: 700}} className='profile-title-home'>
                <span style={{ color: '#FFFFFF'}}>I'm &nbsp;</span>Shubham Raut
           </Typography>
           <Typography variant='h3' component={'div'} sx={{ color: '#FFFFFF', fontWeight: 700}} className='profile-roles-home'>
                a {typeEffect}
           </Typography>
           <Typography variant='h6' component='div' sx={{ fontWeight: 500, color: '#808080'}}>
                currently focused on building user experiences that drive growth.
           </Typography>
           <StyledSocialMediaIconsWrapper>
                <LinkedInIcon sx={{ color: '#FFFFFF', width: '40px', height: '40px'}}/>
                <GitHubIcon sx={{ color: '#FFFFFF', width: '35px', height: '35px'}}/>
           </StyledSocialMediaIconsWrapper>
        </StyledHeroDescriptionWrapper>
        <StyledHeroAvatarWrapper 
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
            <img 
              src={Avatar} 
              alt='avatar'
              style={{
                transform: isHovered
                ? `rotate(350deg) translate(${position.x}px, ${position.y}px)`
                : 'rotate(350deg) translate(0, 0)',
            }}/>
        </StyledHeroAvatarWrapper>
    </StyledPageWrapper>
  )
}

export default Home;