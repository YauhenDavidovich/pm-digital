import React from 'react';
import Navbar from "../Navbar";
import SummariesHeader from "./SummaryHeader";
import SummariesWrapper from "./SummariesWrapper";

const Summaries = () => {
    return (
        <div>
            <Navbar fonBackgroundColor={"#000046"}/>
            <SummariesHeader/>
            <SummariesWrapper/>
        </div>
    );
};

export default Summaries;
