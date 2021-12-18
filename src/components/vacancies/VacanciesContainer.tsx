import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getArticlesTC} from "../../bll/vacanciesReducer";
import {AppRootStateType} from "../../bll/store";
import {Result} from "../../dal/api";
import VacanciesCard from "./VacancieCard";


const VacanciesContainer = () => {
    const dispatch = useDispatch()
    const vacancies = useSelector<AppRootStateType, Array<Result>>(state => state.vacancies)
    useEffect(
        () => {
            dispatch(getArticlesTC())
        }, []
    )
    return (
        <div>
            {vacancies.map(vacancie => {
                return <VacanciesCard
                key={vacancie.id}
                />
            })}

        </div>
    )
}

export default VacanciesContainer;
