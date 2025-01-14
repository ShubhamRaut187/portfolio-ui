import React from 'react';
import styled from 'styled-components';

// Styled component for the card
const StyledCarouselCard = styled.div`
  width: 800px;
  height: 400px;
  position: relative; /* Necessary for absolutely positioning child elements */
  border-radius: 10px;
  overflow: hidden; /* Ensures content doesn't overflow the card's rounded corners */
  /* border: 1px solid green; */

  .background {
    width: 100%;
    height: 100%;
    background: url('https://i.redd.it/g4crddfnmt9a1.jpg') center/cover no-repeat;
    transition: filter 0.3s ease-in-out; /* Smooth transition for blur effect */
  }

  // The text overlay layer
  .overlay {
    position: absolute;
    inset: 0; /* Fills the card */
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #d9d9d91f, #7373731f) !important; /* Gradient background on hover */
    opacity: 0; /* Initially hidden */
    transform: translateY(20px); /* Subtle offset for entry animation */
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transition for visibility and position */
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding: 20px;
    z-index: 1; /* Ensures the overlay is above the background */
  }

  // Hover effects for both background and overlay
  &:hover .background {
    filter: blur(4px) brightness(0.7); /* Blur and dim the background */
  }

  &:hover .overlay {
    opacity: 1; /* Make the overlay visible */
    transform: translateY(0); /* Reset the position for smooth entry */
  }
`;

// Functional component for the Carousel Card
const CarouselCard = () => {
  return (
    <StyledCarouselCard>
      {/* Background image layer */}
      <div className="background"></div>

      {/* Overlay text layer */}
      <div className="overlay">
        This is the overlay text that appears on hover!
      </div>
    </StyledCarouselCard>
  );
};

export default CarouselCard;
