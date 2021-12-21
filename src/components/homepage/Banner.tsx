import React from 'react';
import styled from 'styled-components'
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import Title from "../Title";
import TextBlock from "../BannerTextBlock";
import SearchCandidateForm from "../SearchCandidateForm";


export interface StyledBannerProp {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    height?: string
}

const StyledBanner = styled.div<StyledBannerProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({margin}) => margin || '0 auto'};
  height: ${({height}) => height || '420px'};
  width: 100%;
  max-width: 830px;
  @media ${props => props.theme.media.phone} {    
    max-width: 335px;
    height: 459px;
  }
`


const Banner = (props: StyledBannerProp) => {

    return <BackgroundColorWrapper backgroundColor={"#000046"}>
        <StyledBanner>
            <Title>сайт по поиску работы №1</Title>
            <TextBlock width={"750px"}>Please enter the vacancy and the city</TextBlock>
            <SearchCandidateForm/>
        </StyledBanner>


    </BackgroundColorWrapper>
}

export default Banner;
