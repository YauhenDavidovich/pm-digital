import React from 'react';
import {TextField} from "@mui/material";
import styled from "styled-components";

type SearchFieldInput = {
    backgroundColor?: string
    width?:string
    children?: React.ReactNode;
    label?: string
}

export const StyledTextField = styled(TextField)<SearchFieldInput>`
  background: rgba(255, 255, 255, 0.15);  
  width: ${props => props.width || "100%"};
  & div.MuiFormControl-root {
    margin: 2px;
  }
  
  & label.MuiInputLabel-root {
    color: white;
  }
  
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;



const SearchFieldInput= (props: SearchFieldInput) => {
    return <StyledTextField {...props} id="standard-basic" label={props.label} variant="filled" margin="normal"  style={{marginRight: '4px', marginLeft: '4px'}}/>
};
export default SearchFieldInput;
