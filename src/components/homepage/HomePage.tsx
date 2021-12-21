import React from 'react';
import Navbar from "../Navbar";
import Banner from "./Banner";
import VacanciesAmountBanner from "./VacanciesAmountBanner";
import Partners from "./Partners";
import PlaceVacancy from "./PlaceVacancy";

const HomePage = () => {
    return (
        <>
            <Navbar justify={"space-between"}/>
            <Banner/>
            <VacanciesAmountBanner/>
            <Partners/>
            <PlaceVacancy/>

        </>

    )
}

export default HomePage;
