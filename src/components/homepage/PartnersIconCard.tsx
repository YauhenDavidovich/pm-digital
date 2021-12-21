import React from 'react';
import styled from "styled-components";
import {StyledNavbarProp} from "../Navbar";
import Title from "../Title";
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import FlexWrapper from "../FlexWrapper";

type ParnersIconCardtype = {
    src: string
    children?: React.ReactNode;
}

const StyledPartnersBlock = styled.li<ParnersIconCardtype>`
  padding-right: 30px;
  padding-bottom: 30px;
  @media ${props => props.theme.media.tablet} {
    padding-right: 20px;
    padding-bottom: 20px;
  }
  @media ${props => props.theme.media.phone} {
    padding-right: 12px;
    padding-bottom: 12px;
  }
  & a {
    text-decoration: none;
    outline: none;
    & img{
      height: 79px;
      @media ${props => props.theme.media.tablet} {
        height: 57px;
      }
      @media ${props => props.theme.media.phone} {
        height: 37px;
      }
    }  
  }
`

const PartnersIconCard = (props: ParnersIconCardtype) => {
    return (
        <StyledPartnersBlock {...props}>
            <a href="/">
                <img src={props.src} alt="partner_image"/>
            </a>
        </StyledPartnersBlock>
    );
};

export default PartnersIconCard;
