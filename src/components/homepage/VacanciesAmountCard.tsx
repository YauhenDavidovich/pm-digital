import React from 'react';
import styled from "styled-components";

export interface StyledCardProp {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    height?: string
    backgroundColor?: string
    children?: React.ReactNode;
}

const StyledCard = styled.div<StyledCardProp>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  background-color: ${props => props.backgroundColor || 'white'};
  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 80px;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
 
  height: ${({height}) => height || '396px'};
  width: 100%;
  max-width: 396px;
  @media ${props => props.theme.media.phone} {
    max-width: 335px;
    height: 260px;
    margin-top: 20px;
  }

  @media ${props => props.theme.media.tablet} {
    max-width: 685px;
    height: 260px;
    margin-top: 20px;
  }
`


const VacanciesAmountCard = (props:StyledCardProp) => {
    return (
       <StyledCard {...props}>
           <div style={{
                   borderBottom: '1px solid #000046',
                   width: "84px",
               }}></div>
           <div><h2>100422</h2></div>
           <div><h3>актуальных вакансий</h3></div>

       </StyledCard>

    )
}

export default VacanciesAmountCard;
