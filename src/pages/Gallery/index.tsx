import React from 'react'
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import { Typography } from '@mui/material';
import Carousels from '../../components/Carousels';

//gallery
const Gallery = () => {
  return (
    <PageWrapper>
         <Typography variant='h3' component='div' sx={{ color: '#808080', fontWeight: 600}}>
            Gallery
        </Typography>
        <div>
            <Carousels/>
        </div>
    </PageWrapper>
  )
}

export default Gallery;