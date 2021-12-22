import React from 'react';
import styled from 'styled-components'
import FlexWrapper from "./FlexWrapper";
import BackgroundColorWrapper from "./BackgroundColorWrapper";
import {Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavBarElement from "./NavBarElement";

export interface StyledNavbarProp {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    height?: string
    fonBackgroundColor?: string
}

const StyledNav = styled.div<StyledNavbarProp>`  
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
 
  height: ${({height}) => height || '49px'};
  width: 100%;
  max-width: 1240px;
  @media ${props => props.theme.media.phone} {
    flex-direction: row-reverse;
    max-width: 335px;
    height: 26px;
  }
`


const Navbar = (props: StyledNavbarProp) => {

    return <BackgroundColorWrapper backgroundColor={props.fonBackgroundColor}>
        <StyledNav {...props} align={"center"}>
            <FlexWrapper color={'white'} maxWidth={"289px"} justify={"space-between"}>
                <NavBarElement alignSelfEnd><Link component={RouterLink} to={"/vacancies/"} color="white" underline="none">
                    {'Соискатель'}
                </Link></NavBarElement>
                <NavBarElement displayHide>|</NavBarElement>
                <NavBarElement displayHide><Link component={RouterLink} to={"/summaries/"} color="white" underline="none">
                    {'Работадатель'}
                </Link></NavBarElement>
                <NavBarElement displayHide>|</NavBarElement>
                <NavBarElement displayHide><Link component={RouterLink} to={"/summaries/"} color="white" underline="none">
                    {'HR'}
                </Link></NavBarElement>
            </FlexWrapper>
            <FlexWrapper color={'white'} maxWidth={"146px"} justify={"space-between"}>
                <NavBarElement>RU</NavBarElement>
                <NavBarElement><Link component={RouterLink} to={"/"} color="white" underline="none">
                    {<ArrowDropDownIcon/>}
                </Link></NavBarElement>
                <NavBarElement><Link component={RouterLink} to={"/"} color="white" underline="none">
                    {'Войти'}
                </Link></NavBarElement>
            </FlexWrapper>
        </StyledNav>
    </BackgroundColorWrapper>
}

export default Navbar;
