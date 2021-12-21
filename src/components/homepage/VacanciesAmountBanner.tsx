import React from 'react';
import FlexWrapper from "../FlexWrapper";
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import VacanciesAmountCard from "./VacanciesAmountCard";
import styled from "styled-components";

const FlexVacanciesWrapper = styled(FlexWrapper)`
  margin: 80px auto;
  @media ${props => props.theme.media.phone} {
    flex-direction: column;
    margin: 20px auto;
  }
  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
    margin: 20px auto;
  }
`


const VacanciesAmountBanner = () => {
    return (
        <BackgroundColorWrapper>
        <FlexVacanciesWrapper maxWidth={"1240px"}>
            <VacanciesAmountCard backgroundColor={"#C893EA"}/>
            <VacanciesAmountCard backgroundColor={"#E2CBFF"}/>
            <VacanciesAmountCard backgroundColor={"#F0E4FF"}/>
        </FlexVacanciesWrapper>
            </BackgroundColorWrapper>

    );
};

export default VacanciesAmountBanner;
