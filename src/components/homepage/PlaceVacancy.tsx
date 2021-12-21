import React from 'react';
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import styled from "styled-components";
import BlockTitle from "../BlockTitle";
import Astronaut from "../../assets/images/Group.png"
import SearchButton from "../Button";

type StyledPlaceVacancyProps = {

}

const StyledPlaceVacancy = styled.div<StyledPlaceVacancyProps>`
  display: flex;
  width: 100%;
  max-width: 1240px;
  padding: 80px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
  }
  @media ${props => props.theme.media.phone} {
    flex-direction: column;
  }
  h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 139.9%;  
    color: #5B5B5B;
    width: 340px;
    text-align: left;  
  }
  .placeVacancyText {
   display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
const PlaceVacancy = () => {
    return (
        <BackgroundColorWrapper backgroundColor={"#FAF5FF"}>
            <StyledPlaceVacancy>
                <div><img src={Astronaut}
                          alt="Astronaut"/></div>
                <div className={'placeVacancyText'}>
                    <BlockTitle title={'Разместить вакансию'}/>
                    <div><h4>Работодатель смогут найти вас и предложить отличную работу.</h4></div>
                </div>


                <SearchButton background={"#000046"} width={"228px"}>Разместить вакансию</SearchButton>
            </StyledPlaceVacancy>


        </BackgroundColorWrapper>
    );
};

export default PlaceVacancy;
