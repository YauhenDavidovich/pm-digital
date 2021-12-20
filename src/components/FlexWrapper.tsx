import React from 'react';
import styled from 'styled-components'

type StyledFlexProp = {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    color?: string
    backgroundColor?: string
    fontSize?: string
    maxWidth?: string
    children: React.ReactNode;
}

const StyledFlex = styled.div<StyledFlexProp>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth || 'none'};
  color: ${({color}) => color || 'black'};
  font-size: ${({fontSize}) => fontSize || '16px'};
  background-color: ${({backgroundColor}) => backgroundColor || '#white'};
`
const FlexWrapper = (props: StyledFlexProp) => {
    return <StyledFlex {...props}/>;
};

export default FlexWrapper

