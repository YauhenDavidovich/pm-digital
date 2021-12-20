import React from 'react';
import './App.css';
import Main from "./components/Main";
import styled from "styled-components";

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
background: white;
`


function App() {
  return (
    <AppWrapper>
     <Main/>
    </AppWrapper>
  );
}

export default App;
