import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getVacanciesTC} from "../../bll/vacanciesReducer";
import {AppRootStateType} from "../../bll/store";
import {Vacancy} from "../../dal/api";
import VacanciesCard from "./VacancieCard";


const VacanciesContainer = () => {
    const dispatch = useDispatch()
    const vacancies = useSelector<AppRootStateType, Array<Vacancy>>(state => state.vacancies)
    useEffect(
        () => {
            dispatch(getVacanciesTC())
        }, []
    )

    return (
        <div>
            {vacancies.map(vacancie => {
                return <VacanciesCard
                key={vacancie.id}
                id={vacancie.id}
                title={vacancie.category.title}
                />
            })}

        </div>
    )
}

export default VacanciesContainer;
