import React from 'react';
import styled from 'styled-components'
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import Title from "../Title";
import TextBlock from "../BannerTextBlock";
import SearchCandidateForm from "../SearchCandidateForm";


export interface SummariesHeaderProps {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    height?: string
}

const StyledBanner = styled.div<SummariesHeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({margin}) => margin || '0 auto'};
  height: ${({height}) => height || '230px'};
  width: 100%;
  max-width: 830px;
  @media ${props => props.theme.media.phone} {    
    max-width: 335px;
    height: 280px;
  }
`


const SummariesHeader = (props: SummariesHeaderProps) => {

    return <BackgroundColorWrapper backgroundColor={"#000046"}>
        <StyledBanner>
            <SearchCandidateForm backgroundButtonColor={"#FFF9E4"} textButtonColor={"#202020"}/>
        </StyledBanner>


    </BackgroundColorWrapper>
}

export default SummariesHeader;
