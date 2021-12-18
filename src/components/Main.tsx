import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./homepage/HomePage";
import FindCandidate from "./findCandidate/FindCandidate";


const Main = () => {
    return (
        <Routes >
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/vacancies' element={<Vacancies/>}/>
        </Routes>
    )
}

export default Main;
