import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import ImageContainer from '../ImageContainer';

interface TimelineData {
    logo: string;
    company: string;
    role: string;
    durationRange: string;
    location: string;
    websiteUrl: string;
    description: string;
}

interface Props {
    data: TimelineData[];
}

const StyledTimeLine = styled(Timeline)`
        width: '100%';
        padding: 0;
        margin: 0;
        display: 'flex';
        flex-direction: 'column';
        align-items: 'flex-start';
`;

const StyledTimelineContent = styled(TimelineContent)`
    padding: 30px 0px 30px 10px !important;
    @media screen and (min-width:768px) and (max-width:1024px){
        max-width: 100% !important;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        max-width: 100% !important;
    }
`;

const StyledTimelineContentHeader = styled.div`
    max-width: 100% !important;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    @media screen and (min-width:768px) and (max-width:1024px){
        
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
       flex-direction: column;
       align-items: flex-start;
       height: auto;

       & > .timeline-section-heading {
        white-space: normal;
       }
    }
`

const StyledSubHeadingWrapper = styled.div`
    max-width: 85% !important;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 70px;
    flex-direction: column;
    @media screen and (min-width:768px) and (max-width:1024px){
        
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-left: 0px;
    }
`;

const StyledTimelineDot = styled(TimelineDot)`
    width: 10px !important;
    height: 10px !important;
    background-color: #FFFFFF !important;
`;

const StyledTimelineConector = styled(TimelineConnector)`
    width: 3px !important;
    border-radius: 10px !important;
    background: #FFFFFF !important;
`;

const TimeLine: React.FC<Props> = ({ data }) => {

    return (
    <StyledTimeLine position="right" >
      {
        data.map((item) => {
            return(
                <TimelineItem sx={{ '&:before': { display: 'none' } }}>
                    <TimelineSeparator>
                    <StyledTimelineDot />
                    <StyledTimelineConector/>
                    </TimelineSeparator>
                    <StyledTimelineContent>
                        <StyledTimelineContentHeader>
                            <ImageContainer width='60px' height='60px' borderradius='10px' source={item.logo} imageName={item.company} bgColor='#FFFFFF'/>
                            <Typography variant='h4' component='div' sx={{ color: '#FFFFFF', fontWeight: 600, whiteSpace: 'nowrap'}} className='timeline-section-heading'>
                                {item.role}
                            </Typography>
                        </StyledTimelineContentHeader>
                        <StyledSubHeadingWrapper>
                            <Typography variant='body1' component='div' sx={{ color: '#FFFFFF', fontWeight: 500}}>
                                {item.company} | {item.location}
                            </Typography>
                            <Typography variant='body1' component="div" sx={{ color: '#808080', fontWeight: 500}}>
                                {item.durationRange}
                            </Typography>
                            <Typography variant='body1' component='div' sx={{ color: '#808080', marginTop:'10px'}}>
                                {item.description}
                            </Typography>
                        </StyledSubHeadingWrapper>
                    </StyledTimelineContent>
                </TimelineItem>
            );
        })
      }
    </StyledTimeLine>
  );
}

export default TimeLine;
