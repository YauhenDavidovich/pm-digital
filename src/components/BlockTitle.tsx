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
  
  h2 {
    color: ${props => props.color || props.theme.colors.secondary};
    font-size: ${props => props.fontSize || '32px'};
    font-weight: 700;
    position: relative;
    text-transform: uppercase;
  }
  
  .line {
    position: absolute;
    top: -12px;
    left: 0;
    border-bottom: 1px solid #2a172d;
    width: 170px;
    background: #2a172d;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
`

const BlockTitle = (props: StyledTitleProps) => {
    return <StyledTitle {...props}>
        <h2>{props.title}<div className={'line'}/></h2>
    </StyledTitle>

};

export default BlockTitle;
