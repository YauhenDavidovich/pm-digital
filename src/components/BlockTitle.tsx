import React from 'react';
import styled from 'styled-components'

type StyledTitleProps = {
    title: string
    color?: string
    fontSize?: string
    children?: React.ReactNode
    alignSelf?: string
}


const StyledTitle = styled.div<StyledTitleProps>`
  align: left;
  h2 {
    color: ${props => props.color || props.theme.colors.secondary};
    font-size: ${props => props.fontSize || '32px'};
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .line {    
    border-bottom: 1px solid #000046;
    width: 84px;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
`

const BlockTitle = (props: StyledTitleProps) => {
    return <StyledTitle {...props}>
        <div className={'line'}/>
        <h2>{props.title}</h2>
    </StyledTitle>

};

export default BlockTitle;
