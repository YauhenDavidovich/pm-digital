import React from 'react';
import Navbar from "../Navbar";
import SummariesHeader from "./SummaryHeader";
import SummariesWrapper from "./SummariesWrapper";
import Footer from "../Footer";

const Summaries = () => {
    return (
        <div>
            <Navbar fonBackgroundColor={"#000046"}/>
            <SummariesHeader/>
            <SummariesWrapper/>
            <Footer/>
        </div>
    );
};

export default Summaries;
