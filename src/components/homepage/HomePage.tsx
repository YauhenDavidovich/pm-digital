import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from "@mui/material";

const HomePage = () => {
    return (
        <Link component={RouterLink} to={"/vacancies/"} color="black" underline="none">
            {'Vacancies '}
        </Link>
    )
}

export default HomePage;
