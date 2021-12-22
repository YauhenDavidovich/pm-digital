import React from 'react';
import Navbar from "../Navbar";
import Banner from "./Banner";
import VacanciesAmountBanner from "./VacanciesAmountBanner";
import Partners from "./Partners";
import PlaceVacancy from "./PlaceVacancy";
import Blog from "./Blog";
import AppDownload from "./AppDownload";

const HomePage = () => {
    return (
        <>
            <Navbar justify={"space-between"} fonBackgroundColor={"#251427"}/>
            <Banner/>
            <VacanciesAmountBanner/>
            <Partners/>
            <PlaceVacancy/>
            <Blog/>
            <AppDownload/>

        </>

    )
}

export default HomePage;
