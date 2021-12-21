import React from 'react';
import BackgroundColorWrapper from "../BackgroundColorWrapper";
import styled from "styled-components";
import BlockTitle from "../BlockTitle";
import Astronaut from "../../assets/images/Group.png"
import SearchButton from "../Button";
import CarouselContainer from "../Carousel";

type StyledPlaceVacancyProps = {}

const StyledPlaceVacancy = styled.div<StyledPlaceVacancyProps>`
  display: flex;
  width: 100%;
  max-width: 1240px;
  padding: 80px 0;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
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
    text-align: center;
  }

  .blogText {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .carouselWrapper {
    width: 100%;
  }
`
const Blog = () => {
    return (
        <BackgroundColorWrapper>
            <StyledPlaceVacancy>
                <div className={'blogText'}>
                    <BlockTitle title={'Блог'}/>
                    <div><h4>All articles</h4></div>
                </div>
                <div className={"carouselWrapper"}><CarouselContainer/></div>
            </StyledPlaceVacancy>




        </BackgroundColorWrapper>
    );
};

export default Blog;
