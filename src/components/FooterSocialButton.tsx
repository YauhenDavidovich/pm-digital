import React from 'react';
import { StyledIcon } from "styled-icons/types";
import {Icon} from "@mui/material";
import styled from "styled-components";


interface IconButtonProps {
   icon: StyledIcon;
   onClick: (event:React.MouseEvent<HTMLElement>) => void;
}

const StyledIconLink = styled.a`
  display: block;
  cursor: pointer;
  margin: 5px;
  .icn {
    width: 24px;
    height: 24px;
    color: white;
  }
`


const FooterSocialButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick }) => {
   return (
       <StyledIconLink href="/" >
          <Icon className={"icn"} />
       </StyledIconLink>
   );
};

export default FooterSocialButton;
