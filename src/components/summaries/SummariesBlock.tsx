import React, {useEffect, useState} from 'react';
import BlockTitle from "../BlockTitle";
import styled from "styled-components";
import SelectVariants from "../Select";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Summary} from "../../dal/api";
import {getSummariesTC} from "../../bll/summariesReducer";
import SummaryCard from "./SummaryCard";
import Paginator from "../Pagination";

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
    const [page, setPage] = useState(1);
    const summaries = useSelector<AppRootStateType, Array<Summary>>(state => state.summaries)
    useEffect(
        () => {
            dispatch(getSummariesTC())
        }, []
    )
    const getPaginatedCards= (summaries: Array<Summary>) => {
        const offset = (page-1) * 5;
        return summaries.slice(offset, offset + 5);
    }

    const renderArticles = () => {
        return getPaginatedCards(summaries);
    }


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
                    {renderArticles().map(summary => {
                        return <SummaryCard
                            key={summary.id}
                            id={summary.id.toString()}
                            firstName={summary.first_name}
                            vacancy={summary.category}
                            birthday={summary.birthday}
                            online={summary.visibility}
                            previousWork={summary.workexperience}
                            updated={summary.updated_at}
                            workCity={summary.work_city}
                        />
                    })}
                </div>
                <Paginator currentPage={page} pages={summaries.length} setPage={setPage}/>


            </div>


        </StyledSummaryBlock>
    );
};

export default SummariesBlock;
