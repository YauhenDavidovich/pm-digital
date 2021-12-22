import React, {useEffect} from 'react';
import BlockTitle from "../BlockTitle";
import styled from "styled-components";
import SelectVariants from "../Select";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Summary, Vacancy} from "../../dal/api";
import {getVacanciesTC} from "../../bll/vacanciesReducer";
import VacanciesCard from "../vacancies/VacancieCard";
import {getSummariesTC} from "../../bll/summariesReducer";

export const StyledSummaryBlock = styled.div`
  
  @media ${props => props.theme.media.tablet} {
   
  }
  @media ${props => props.theme.media.phone} {
    
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px; 
    color: #5B5B5B; 
    margin: 0;
  }
  
  .summaryTimeFilter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
`


const SummariesBlock = () => {
    const dispatch = useDispatch()
    const summaries = useSelector<AppRootStateType, Array<Summary>>(state => state.summaries)
    useEffect(
        () => {
            dispatch(getSummariesTC())
        }, []
    )

    const vacancy= "продавец-консультант"


    return (
        <StyledSummaryBlock>
            <div className={"summaryTextBlock"}>
                <BlockTitle title1={"Мы подобрали "} title2={"451642"} title3={" резюме"}/>
                <div className={"summaryTimeFilter"}>
                    <h4>Резюме {vacancy} во всей Украине</h4>
                    <SelectVariants/>
                </div>
                <div>
                    {summaries.map(summary => {
                        return <VacanciesCard
                            key={summary.id}
                            id={summary.id.toString()}
                            title={summary.first_name}
                        />
                    })}
                </div>


            </div>


        </StyledSummaryBlock>
    );
};

export default SummariesBlock;
