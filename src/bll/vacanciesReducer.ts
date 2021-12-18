import {Dispatch} from "redux";
import {API, Result} from "../dal/api";


const initialState: Array<Result> = []

//Reducer
export const vacanciesReducer = (state: Array<Result> = initialState, action: ActionsTypes): Array<Result> => {
    switch (action.type) {
        case SET_VACANCIES:
            return action.vacancies
        default:
            return state;
    }
};

// actions
const SET_VACANCIES = 'SET-VACANCIES';

// Action Creators
export const SetVacanciesAC = (vacancies: Array<Result>) => ({
    type: SET_VACANCIES,
    vacancies,
} as const);

export const getVacanciesTC = () => (dispatch: Dispatch) => {
    API.getVacancies()
        .then(res => {
            debugger
            dispatch(SetVacanciesAC(res.data.results))
        })
        .catch(err => {
            console.log(err)
        })
}


export type SetVacanciesType = ReturnType<typeof SetVacanciesAC>
type ActionsTypes = SetVacanciesType
