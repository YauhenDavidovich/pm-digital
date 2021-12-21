import React from 'react';
import styled from 'styled-components'

type StyledWrapperProp = {
    backgroundColor?: string
    children: React.ReactNode;
}

const StyledWrapper = styled.div<StyledWrapperProp>`
  width: 100%;  
  background-color: ${({backgroundColor}) => backgroundColor || '#white'};
`
const BackgroundColorWrapper = (props: StyledWrapperProp) => {
    return <StyledWrapper {...props}/>;
};

export default BackgroundColorWrapper

