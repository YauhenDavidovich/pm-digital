import React from 'react';
import styled from "styled-components";
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import PartnersIconCard from "./PartnersIconCard";
import firstIcon from "../../assets/icons/FedExIcon.png";
import secondIcon from "../../assets/icons/NetflixIcon.png";
import thirdIcon from "../../assets/icons/AliExpressIcon.png";
import fourthIcon from "../../assets/icons/OnlyFansIcon.png";
import fifthIcon from "../../assets/icons/VerizonCommunicationsIcon.png";
import sixIcon from "../../assets/icons/TheHeraldJournalIcon.png";
import BlockTitle from "../BlockTitle";

type StyledPartnersBlockProp = {
    width?: string
    direction?: string
    children: React.ReactNode;
}

const StyledPartnersBlock = styled.div<StyledPartnersBlockProp>`
  display: flex;
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ul {
    list-style-type: none;
  }

  h3 {
    position: relative;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 57px;
    text-transform: uppercase;
  }

  .partnersBox {
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }

  @media ${props => props.theme.media.tablet} {
    .partnersBox {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

      h3 {
        font-size: 24px;
      }
    }
  @media ${props => props.theme.media.phone} {
    .partnersBox {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const Partners = () => {
    return (
        <BackgroundColorWrapper>
            <StyledPartnersBlock>
                <BlockTitle title1={'Нас выбрали'}/>
                <div>
                    <ul className={"partnersBox"}>
                        <PartnersIconCard src={firstIcon}/>
                        <PartnersIconCard src={secondIcon}/>
                        <PartnersIconCard src={thirdIcon}/>
                        <PartnersIconCard src={fourthIcon}/>
                        <PartnersIconCard src={fifthIcon}/>
                        <PartnersIconCard src={sixIcon}/>
                        <PartnersIconCard src={firstIcon}/>
                        <PartnersIconCard src={sixIcon}/>
                        <PartnersIconCard src={thirdIcon}/>
                        <PartnersIconCard src={fourthIcon}/>
                        <PartnersIconCard src={fifthIcon}/>
                        <PartnersIconCard src={sixIcon}/>
                        <PartnersIconCard src={sixIcon}/>
                        <PartnersIconCard src={thirdIcon}/>
                        <PartnersIconCard src={fourthIcon}/>
                        <PartnersIconCard src={fifthIcon}/>
                        <PartnersIconCard src={fourthIcon}/>
                        <PartnersIconCard src={firstIcon}/>
                        <PartnersIconCard src={secondIcon}/>
                        <PartnersIconCard src={sixIcon}/>
                        <PartnersIconCard src={thirdIcon}/>
                        <PartnersIconCard src={fourthIcon}/>
                        <PartnersIconCard src={fifthIcon}/>
                        <PartnersIconCard src={sixIcon}/>
                    </ul>
                </div>


            </StyledPartnersBlock>


        </BackgroundColorWrapper>
    );
};

export default Partners;
