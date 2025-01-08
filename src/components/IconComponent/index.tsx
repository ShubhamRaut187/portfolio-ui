import React from 'react'
import styled from 'styled-components'

interface Props {
    width?: string,
    height?: string,
    src: string,
    filter?: string,
}

const StyledIcon = styled.div<Props>`
    background-image: url(${(props) => props.src});
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    height: ${(props) => props.height || '20px'} !important;
    width: ${(props) => props.width || '20px'} !important;
    filter: ${(props) => props.filter || 'none'};
`;

const IconComponent: React.FC<Props> = ({ width, height, src, filter }) => {
    return (
   <StyledIcon width={width} height={height} src={src} filter={filter}/>
  )
}

export default IconComponent;