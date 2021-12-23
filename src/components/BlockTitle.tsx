import React from 'react';
import styled from 'styled-components'

type StyledTitleProps = {
    title1: string
    title2?: string
    title3?: string
    color?: string
    fontSize?: string
    children?: React.ReactNode
    alignSelf?: string
}


const StyledTitle = styled.div<StyledTitleProps>`
  margin: 20px 10px;
  h2 {
    color: ${props => props.color || props.theme.colors.secondary};
    font-size: ${props => props.fontSize || '32px'};
    font-weight: 700;
    position: relative;
    text-transform: uppercase;
  }
  span {
    color: #851FFF;
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
        <h2>{props.title1}<span>{props.title2}</span>{props.title3}<div className={'line'}/></h2>
    </StyledTitle>

};

export default BlockTitle;
