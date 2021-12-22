import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {vacanciesReducer} from "./vacanciesReducer";
import {summariesReducer} from "./summariesReducer";

const rootReducer = combineReducers({
    vacancies: vacanciesReducer,
    summaries: summariesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
