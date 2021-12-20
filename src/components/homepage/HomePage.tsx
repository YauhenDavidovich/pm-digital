import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from "@mui/material";
import Navbar from "../Navbar";

const HomePage = () => {
    return (
        <>
            <Navbar justify={"space-between"} />
            <Link component={RouterLink} to={"/vacancies/"} color="black" underline="none">
                {'Vacancies '}
            </Link></>

    )
}

export default HomePage;
