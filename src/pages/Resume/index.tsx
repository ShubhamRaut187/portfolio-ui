import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import Timeline from '../../components/TimeLine';
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
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        height: auto;
    }
`;

const Resume: React.FC = () => {
  return (
    <PageWrapper>
        <Typography variant='h3' component='div' sx={{ color: '#808080', fontWeight: 600}}>
            Resume
        </Typography>
        <StyledResumeContentWrapper>
            <StyledWorkContentWrapper>
                <Timeline data={WORK_INFORMATION}/>
            </StyledWorkContentWrapper>
            <StyledWorkContentWrapper>
                <Timeline data={EDUCATION_INFORMATION}/>
            </StyledWorkContentWrapper>
        </StyledResumeContentWrapper>
    </PageWrapper>
  )
}

export default Resume;