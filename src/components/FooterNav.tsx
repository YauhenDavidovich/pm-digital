import React from 'react';
import styled from "styled-components";

const StyledFooterNav = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  padding: 50px 20px;
  @media ${props => props.theme.media.tablet} {
    padding: 100px 20px 50px 20px;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  
  @media ${props => props.theme.media.phone} {
    padding: 122px 20px 50px 20px;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  .footerNavColumn {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
  
  .footerNavLink {
    margin: 15px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  .footerColumnTitle {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
  }


`


const FooterNav = () => {
    return (
        <StyledFooterNav>
            <div className={"footerNavColumn"}>
                <div className={"footerColumnTitle"}><a href="/">Job Seekers</a></div>
                <div className={"footerNavLink"}><a href="/">Search Jobs</a></div>
                <div className={"footerNavLink"}><a href="/">Create Resume</a></div>
                <div className={"footerNavLink"}><a href="/">Job Alert</a></div>
                <div className={"footerNavLink"}><a href="/">Advice to Job Seeker</a></div>
            </div>
            <div className={"footerNavColumn"}>
                <div className={"footerColumnTitle"}><a href="/">Employer</a></div>
                <div className={"footerNavLink"}><a href="/">Post a Job</a></div>
                <div className={"footerNavLink"}><a href="/">Search Resume</a></div>
                <div className={"footerNavLink"}><a href="/">Support</a></div>
                <div className={"footerNavLink"}><a href="/">Advice to Employer</a></div>
            </div>
            <div className={"footerNavColumn"}>
                <div className={"footerColumnTitle"}><a href="/">Job Meteor</a></div>
                <div className={"footerNavLink"}><a href="/">About Us</a></div>
                <div className={"footerNavLink"}><a href="/">Blog</a></div>
                <div className={"footerNavLink"}><a href="/">FAQ</a></div>
            </div>
            <div className={"footerNavColumn"}>
                <div className={"footerColumnTitle"}><a href="/">Partner With Us</a></div>
                <div className={"footerNavLink"}><a href="/">Advertising on the website</a></div>
                <div className={"footerNavLink"}><a href="/">Affiliate Program</a></div>
                <div className={"footerNavLink"}><a href="/">Contact Us</a></div>
            </div>
        </StyledFooterNav>
    );
};

export default FooterNav;
