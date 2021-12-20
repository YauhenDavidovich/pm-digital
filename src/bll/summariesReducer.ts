import {Dispatch} from "redux";
import {API, Summary} from "../dal/api";


const initialState: Array<Summary> = []

//Reducer
export const summariesReducer = (state: Array<Summary> = initialState, action: ActionsTypes): Array<Summary> => {
    switch (action.type) {
        case SET_SUMMARIES:
            return action.summaries
        default:
            return state;
    }
};

// actions
const SET_SUMMARIES = 'SET-SUMMARIES';

// Action Creators
export const SetSummariesAC = (summaries: Array<Summary>) => ({
    type: SET_SUMMARIES,
    summaries,
} as const);

export const getSummariesTC = () => (dispatch: Dispatch) => {
    API.getSummaries()
        .then(res => {
            dispatch(SetSummariesAC(res.data.results))
        })
        .catch(err => {
            console.log(err)
        })
}


export type SetSummariesType = ReturnType<typeof SetSummariesAC>
type ActionsTypes = SetSummariesType
