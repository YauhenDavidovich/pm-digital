import React from 'react';
import styled from "styled-components";

const StyledSummariesFilterWrapper = styled.div`
    display: flex;
  justify-content: space-between;
  max-width: 363px;
  width: 100%;
  border: 1px solid black; 
`

const SummariesFilterBlock = () => {
    return (
        <StyledSummariesFilterWrapper>
            Фильтры
        </StyledSummariesFilterWrapper>
    );
};

export default SummariesFilterBlock;
