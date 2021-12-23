import React from 'react';
import FooterSocialButton from "./FooterSocialButton";
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Linkedin} from "@styled-icons/boxicons-logos/Linkedin";
import {Facebook} from "@styled-icons/boxicons-logos/Facebook";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Youtube} from "@styled-icons/boxicons-logos/Youtube";
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp";
import styled from "styled-components";

const StyledFooterSocial = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  @media ${props => props.theme.media.tablet} {
   
  }
  
  @media ${props => props.theme.media.phone} {
    
  }
  
   
`

const FooterSocial = () => {
    return (
        <StyledFooterSocial>
            <FooterSocialButton icon={Twitter} onClick={() => console.log("clicked")}/>
            <FooterSocialButton icon={Linkedin} onClick={() => console.log("clicked")}/>
            <FooterSocialButton icon={Facebook} onClick={() => console.log("clicked")}/>
            <FooterSocialButton icon={Instagram} onClick={() => console.log("clicked")}/>
            <FooterSocialButton icon={Youtube} onClick={() => console.log("clicked")}/>
            <FooterSocialButton icon={Whatsapp} onClick={() => console.log("clicked")}/>
        </StyledFooterSocial>
    );
};

export default FooterSocial;
