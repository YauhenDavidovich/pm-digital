import React from 'react';
import styled from "styled-components";

type InputFieldInput = {
    backgroundColor?: string
    width?:string
    children?: React.ReactNode;
    label?: string
    placeholder:string
}

const Input = styled.input<InputFieldInput>`
  font-size: 14px;
  padding: 10px;
  background: ${props => props.backgroundColor || "rgba(255, 255, 255, 0.15)"};
  max-width: ${props => props.width || "auto"};
  width: 100%;
  margin: 4px;
  border: none;
  ::placeholder {
    color: white;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 16px;
    max-width: 335px;
  }

  @media ${props => props.theme.media.tablet} {
    font-size: 16px;
    max-width: 300px;


`;


const CustomInput = (props:InputFieldInput) => {
    return (
        <Input {...props}/>
    );
};

export default CustomInput;
