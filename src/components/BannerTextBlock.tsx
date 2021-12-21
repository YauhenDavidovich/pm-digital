import React from 'react';
import styled from 'styled-components'

type StyledTextBlockProps = {
    color?: string
    fontSize?: string
    children: React.ReactNode;
    width?: string
    fontWeight?: number
}


const StyledBannerTextBlock = styled.div<StyledTextBlockProps>`
  max-width: ${props => props.width || "auto"};
  width: 100%;
  color: ${props => props.color || props.theme.colors.primary};
  font-weight: ${props => props.fontWeight || 600};
  font-size: ${props => props.fontSize || '64px'};  
  text-align: center;
  margin-top: 30px;
  @media ${props => props.theme.media.phone} {
    font-size: 30px;
    max-width: 335px;
  }
`

const BannerTextBlock = (props: StyledTextBlockProps) => {
    return <StyledBannerTextBlock {...props}/>

};

export default BannerTextBlock;
