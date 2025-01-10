import React from 'react'
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import { Typography, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const StyledContentWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    margin: 20px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
        flex-direction: column;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

const StyledConnectSocialWrapper = styled.div`
    /* height: 300px; */
    width: 45%;
    /* border: 1px solid white; */
    border-radius: 20px;
    background: linear-gradient(to right, #d9d9d91f, #7373731f) !important;
    padding: 30px 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 83%;
    }
`;

const StyledConnectFromWrapper = styled.div`
    width: 45%;
    height: 290px;
    border-radius: 20px;
    /* border: 1px solid red; */
    padding: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        padding: 30px 0px;
        /* border: 1px solid red; */
    }
    & > div {
        width: 48%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        /* border: 1px solid red; */
        height: 100% !important;
        gap: 24px;
        @media screen and (min-width: 320px) and (max-width: 767px) {
        gap: 10px;
    }
    }
`;

const StyledSocialIconsContainer = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 20px auto;
`; 

const StyledTextFeild = styled(TextField)`
    width: 100% !important;
    background: linear-gradient(to right, #d9d9d91f, #7373731f) !important;
    border-radius: 8px !important;
    color: #FFFFFF !important;

  & label {
    color: #FFFFFF !important; /* Label color */
  }

  & .MuiFilledInput-root {
    color: #FFFFFF; /* Input text color */

    &.Mui-focused {
      /* border-bottom: 2px solid #E51C4A !important;  */
    }
  }


  & .MuiFilledInput-underline:before {
    border-bottom: none !important; 
  }

  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid #E51C4A !important; 
    border-radius: 10px !important;
  }
`;

const StyledTextFeildMessage = styled(TextField)`
    width: 100% !important;
    background: linear-gradient(to right, #d9d9d91f, #7373731f) !important;
    border-radius: 8px !important;
    color: #FFFFFF !important;
    height: 100% !important;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 87% !important;
    }

  & label {
    color: #FFFFFF !important; 
  }

  & .MuiFilledInput-root {
    color: #FFFFFF; /* Input text color */
    height: 100% !important;
    &.Mui-focused {
      /* border-bottom: 2px solid #E51C4A !important;  */
    }
  }


  & .MuiFilledInput-underline:before {
    border-bottom: none !important; 
  }

  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid #E51C4A !important; 
    border-radius: 10px !important;
  }

`;


const StyledButton = styled(Button)`
    width: 100% !important;
    height: 50px !important;
    text-transform: none !important;
    border-color: #E51C4A !important;
    background-color: #E51C4A !important;
    color: #FFFFFF;
    font-family: "Kumbh Sans", serif !important;
    box-shadow: none !important;
    border-radius: 8px !important;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100% !important;
    }
`;

const Contact = () => {
  return (
    <PageWrapper>
        <Typography variant='h3' component='div' sx={{ color: '#808080', fontWeight: 600}}>
            Get in touch
        </Typography>
        <StyledContentWrapper>
            <StyledConnectSocialWrapper>
                <Typography variant='h5' component='div' sx={{ color: '#E51C4A', fontWeight: 600}}>
                    Let's Connect...
                </Typography>
                <Typography variant='body1' component='div' sx={{ color: '#808080'}}>
                    I’m passionate about exploring new opportunities, collaborating on innovative projects, and connecting with professionals 
                    who share a vision for growth. Whether you’re looking to team up on a project, discuss ideas, or explore new ventures, 
                    I’m excited to hear from you. Feel free to reach out, and let’s create something impactful together!
                </Typography>
                <Typography variant='body1' component='div' sx={{ color: '#808080', marginTop: '20px'}}>
                    Write me at: raut.shubham4554@gmail.com
                </Typography>
                <Typography variant='body1' component='div' sx={{ color: '#808080'}}>
                    Mobile: +91 &nbsp;7499265181
                </Typography>
                <StyledSocialIconsContainer>
                    <LinkedInIcon sx={{ color: '#FFFFFF', width: '30px', height: '30px', cursor: 'pointer'}}/>
                    <GitHubIcon sx={{ color: '#FFFFFF', width: '25px', height: '25px', cursor: 'pointer'}}/>
                    <EmailIcon sx={{ color: '#FFFFFF', width: '30px', height: '30px', cursor: 'pointer'}}/>
                    <InstagramIcon sx={{ color: '#FFFFFF', width: '30px', height: '30px', cursor: 'pointer'}}/>
                    <CallIcon sx={{ color: '#FFFFFF', width: '30px', height: '30px', cursor: 'pointer'}}/>
                </StyledSocialIconsContainer>
            </StyledConnectSocialWrapper>
            <StyledConnectFromWrapper>
                <div>
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Name"
                      variant="filled"
                    />
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Email Address"
                      variant="filled"
                    />
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Purpose"
                      variant="filled"
                    />
                    <StyledButton variant='contained'>
                        <EmailOutlinedIcon sx={{ marginRight: '20px'}}/>
                        Send Mail
                    </StyledButton>
                </div>
                <div>
                    <StyledTextFeildMessage
                      required
                      id="filled-required"
                      label="Your Message"
                      variant="filled"
                      multiline
                      rows={10}
                    />
                </div>
            </StyledConnectFromWrapper>
        </StyledContentWrapper>
    </PageWrapper>
  )
}

export default Contact;