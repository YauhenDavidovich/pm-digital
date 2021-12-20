import React from 'react';
import styled from 'styled-components'
import FlexWrapper from "./FlexWrapper";
import BackgroundColorWrapper from "./BackgroundColorWrapper";
import {Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface StyledNavbarProp {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    height?: string
}

const StyledNav = styled.div<StyledNavbarProp>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0 auto'};
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

    return <BackgroundColorWrapper backgroundColor={"#251427"}>
        <StyledNav {...props} align={"center"}>
            <FlexWrapper color={'white'} maxWidth={"289px"} justify={"space-between"}>
                <Link component={RouterLink} to={"/vacancies/"} color="white" underline="none">
                    {'Соискатель'}
                </Link>
                <>|</>
                <Link component={RouterLink} to={"/summaries/"} color="white" underline="none">
                    {'Работадатель'}
                </Link>
                <>|</>
                <Link component={RouterLink} to={"/summaries/"} color="white" underline="none">
                    {'HR'}
                </Link>
            </FlexWrapper>
            <FlexWrapper color={'white'} maxWidth={"146px"} justify={"space-between"}>
                <div>RU</div>
                <div><Link component={RouterLink} to={"/"} color="white" underline="none">
                 {<ArrowDropDownIcon/>}
                </Link></div>
<div><Link component={RouterLink} to={"/"} color="white" underline="none">
    {'Войти'}
</Link></div>

            </FlexWrapper>
        </StyledNav>
    </BackgroundColorWrapper>
}

export default Navbar;
