import React from 'react';
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import styled from "styled-components";
import BlockTitle from "../BlockTitle";
import Iphone from "../../assets/images/Iphone.png"
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
  .buttonsBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 135px;
    height: 100%;
  }
  
`


const AppDownload = () => {
    return (
        <BackgroundColorWrapperExtended backgroundColor={"#FAF5FF"}>
            <StyledAppDownloadWrapper>
                <div><img src={Iphone}
                          alt="Iphone"/></div>
                <div className={'placeVacancyText'}>
                    <BlockTitle title={'Скачивайте приложение'}/>
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
