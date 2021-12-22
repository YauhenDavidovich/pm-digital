import React from 'react';
import SummariesBlock from "./SummariesBlock";
import SummariesFilterBlock from "./SummariesFilterBlock";
import styled from "styled-components";

const StyledSummariesWrapper = styled.div`
    display: flex;
  justify-content: space-between;
  max-width: 1240px;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
`

const SummariesWrapper = () => {
    return (
        <StyledSummariesWrapper>
            <SummariesBlock/>
            <SummariesFilterBlock/>
        </StyledSummariesWrapper>


    );
};

export default SummariesWrapper;
