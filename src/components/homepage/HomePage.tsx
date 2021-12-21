import React from 'react';
import Navbar from "../Navbar";
import Banner from "./Banner";
import VacanciesAmountBanner from "./VacanciesAmountBanner";
import Partners from "./Partners";
import PlaceVacancy from "./PlaceVacancy";
import Blog from "./Blog";

const HomePage = () => {
    return (
        <>
            <Navbar justify={"space-between"}/>
            <Banner/>
            <VacanciesAmountBanner/>
            <Partners/>
            <PlaceVacancy/>
            <Blog/>

        </>

    )
}

export default HomePage;
