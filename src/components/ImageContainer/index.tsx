import React from 'react'
import styled from 'styled-components';

interface StyledProps {
    width: string,
    height: string,
    borderRadius: string,
}

interface Props extends StyledProps {
    source: string,
    imageName: string,
}

const StyledImageContainer = styled.div<StyledProps>`
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};
    border-radius: ${(props) => props.borderRadius || 'none'};
    
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const ImageContainer: React.FC<Props> = ({ source, imageName, width, height, borderRadius }) => {
  return (
    <StyledImageContainer width={width} height={height} borderRadius={borderRadius}>
        <img src={source} alt={imageName}/>
    </StyledImageContainer>
  )
}

export default ImageContainer;