import React from 'react';
import styled from "styled-components";
import BackgroundColorWrapper from "./BackgroundColorWrapper";
import FooterNav from "./FooterNav";

const StyledFooter = styled.div`
  position: relative;
  min-height: 420px;
  max-width: 1240px;
  width: 100%;
`


const Footer = () => {
    return (
        <BackgroundColorWrapper backgroundColor={"#000046"}>
            <StyledFooter>
                <FooterNav/>
            </StyledFooter>
        </BackgroundColorWrapper>

    )
}

export default Footer;
