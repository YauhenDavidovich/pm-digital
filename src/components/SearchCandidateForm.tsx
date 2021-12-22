import React from 'react';
import styled from 'styled-components'
import SearchButton from "./Button";
import CustomInput from "./CustomInput";

export interface SearchCandidateFormProps {
    direction?: string
    justify?: string
    margin?: string
    height?: string
}

const StyledSearchCandidateForm = styled.div<SearchCandidateFormProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: center;
  margin: 30px auto 0; 
  height: ${({height}) => height || '49px'};
  width: 100%;
  max-width: 830px;
  color: aliceblue;
  @media ${props => props.theme.media.phone} {
    flex-direction: column;
    max-width: 335px;
    height: 168px;
  }
`

const SearchCandidateForm = (props: SearchCandidateFormProps) => {
    return (
        <StyledSearchCandidateForm {...props}>
            <CustomInput placeholder={'🔍 На какую должность ищете кандидата?'} width='410px'/>
            <CustomInput placeholder={'Город'} width='205px'/>
            <SearchButton color={"white"}>Найти кандидатов</SearchButton>
        </StyledSearchCandidateForm>

    )
}

export default SearchCandidateForm;
