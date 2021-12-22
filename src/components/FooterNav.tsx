import React from 'react';
import styled from "styled-components";

const StyledFooterNav = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  .footerNavColumn {
    color: white;
    font-weight: 400;
    font-size: 14px;
  }


`


const FooterNav = () => {
    return (
        <StyledFooterNav>
            <div className={"footerNavColumn"}>
                <div>Job Seekers</div>
                <div>Search Jobs</div>
                <div>Create Resume</div>
                <div>Job Alert</div>
                <div>Advice to Job Seeker</div>
            </div>
            <div className={"footerNavColumn"}>
                <div>Employer</div>
                <div>Post a Job</div>
                <div>Search Resume</div>
                <div>Support</div>
                <div>Advice to Employer</div>
            </div>
            <div className={"footerNavColumn"}>
                <div>Job Meteor</div>
                <div>About Us</div>
                <div>Blog</div>
                <div>FAQ</div>
            </div>
            <div className={"footerNavColumn"}>
                <div>Partner With Us</div>
                <div>Advertising on the website</div>
                <div>Affiliate Program</div>
                <div>Contact Us</div>
            </div>
        </StyledFooterNav>
    );
};

export default FooterNav;
