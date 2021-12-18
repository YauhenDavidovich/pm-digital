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
export const SetArticlesAC = (vacancies: Array<Result>) => ({
    type: SET_VACANCIES,
    vacancies,
} as const);

export const getArticlesTC = () => (dispatch: Dispatch) => {
    API.getVacancies()
        .then(res => {
            dispatch(SetArticlesAC(res.data.data.results))
        })
        .catch(err => {
            console.log(err)
        })
}


export type SetArticlesType = ReturnType<typeof SetArticlesAC>
type ActionsTypes = SetArticlesType
