import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from "@mui/material";
import Navbar from "../Navbar";
import Banner from "./Banner";
import VacanciesAmountBanner from "./VacanciesAmountBanner";

const HomePage = () => {
    return (
        <>
            <Navbar justify={"space-between"}/>
            <Banner/>
            <VacanciesAmountBanner/>

        </>

    )
}

export default HomePage;
