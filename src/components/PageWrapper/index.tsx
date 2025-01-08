import styled from "styled-components";

const PageWrapper = styled.div`
    width: 85%;
    margin: 80px auto 40px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
       width: 90%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 90%;
    }
`;

export default PageWrapper;