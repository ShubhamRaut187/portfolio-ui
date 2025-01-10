import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import { Typography, Button } from '@mui/material';
import styled from 'styled-components';
import Timeline from '../../components/TimeLine';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { EDUCATION_INFORMATION, WORK_INFORMATION} from './constants';

const StyledResumeContentWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
      flex-direction: column;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        border: 1px solid red;
    }
`;

const StyledWorkContentWrapper = styled.div`
    width: 48%;
    border-radius: 20px;
    height: 750px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        height: auto;
    }
`;

const StyledDownloadButton = styled(Button)`
    text-transform: none !important;
    border-color: #E51C4A !important;
    background-color: #E51C4A !important;
    color: #FFFFFF !important;
    font-family: "Kumbh Sans", serif !important;
    margin: 30px auto auto 25px !important;
    box-shadow: none !important;
`;


const Resume: React.FC = () => {
  return (
    <PageWrapper>
        <Typography variant='h3' component='div' sx={{ color: '#808080', fontWeight: 600}}>
            Career & Learning
        </Typography>
        <StyledResumeContentWrapper>
            <StyledWorkContentWrapper>
                <Typography variant='h4' sx={{ color: '#E51C4A', fontWeight: 600}}>
                    Work Experience
                </Typography>
                <Timeline data={WORK_INFORMATION}/>
                <StyledDownloadButton variant="contained" >
                    <FileDownloadOutlinedIcon sx={{ marginRight: '10px'}}/>
                    Download Resume
                </StyledDownloadButton>
            </StyledWorkContentWrapper>
            <StyledWorkContentWrapper>
                <Typography variant='h4' sx={{ color: '#E51C4A', fontWeight: 600}}>
                    Education
                </Typography>
                <Timeline data={EDUCATION_INFORMATION}/>
            </StyledWorkContentWrapper>
        </StyledResumeContentWrapper>
    </PageWrapper>
  )
}

export default Resume;