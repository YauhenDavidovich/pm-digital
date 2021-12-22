import React from 'react';
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import styled from "styled-components";
import BlockTitle from "../BlockTitle";
import Iphone from "../../assets/images/Iphone.png"
import Astronaut from "../../assets/images/Astronaut.png"
import PlayMarket from "../../assets/images/playmarket.png"
import Appstore from "../../assets/images/appstore.png"
import {StyledPlaceVacancy} from "./PlaceVacancy";
import ButtonImage from "../ButtonImage";

type StyledPlaceVacancyProps = {}

const BackgroundColorWrapperExtended = styled(BackgroundColorWrapper)`
  //margin-top: 120px;
`

const StyledAppDownloadWrapper = styled(StyledPlaceVacancy)`
  padding-top: -120px;

  .mobileImage {
    display: none;
  }

  .buttonsBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 135px;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 5px;

  }

  @media ${props => props.theme.media.phone} {
    flex-direction: column;
    max-width: 335px;
    .mobileImage {
      display: block;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .desktopImage {
      display: none;
    }

    .downloadText {
      text-align: left;
      margin-top: 15px;
      margin-bottom: 5px;
    }
  }
`


const AppDownload = () => {
    return (
        <BackgroundColorWrapperExtended backgroundColor={"#FAF5FF"}>
            <StyledAppDownloadWrapper>
                <div className={"desktopImage"}><img src={Iphone}
                                                     alt="Iphone"/></div>
                <div className={"mobileImage"}><img src={Astronaut}
                                                    alt="Astronaut"/></div>
                <div className={'downloadText'}>
                    <BlockTitle title1={'Скачивайте приложение'}/>
                    <div><h4>Работодатели смогут найти вас и предложить отличную работу.</h4></div>
                </div>
                <div className={"buttonsBlock"}>
                    <ButtonImage img={PlayMarket}/>
                    <ButtonImage img={Appstore}/>
                </div>

            </StyledAppDownloadWrapper>
        </BackgroundColorWrapperExtended>
    );
};

export default AppDownload;
