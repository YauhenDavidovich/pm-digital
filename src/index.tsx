import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./bll/store";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import MontserratFont from "./font";

// @ts-ignore
// injectGlobal`
//   @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: Roboto, sans-serif;
//   }
//   h1 {
//     font-family: Montserrat;
//   }
// `


const Global = createGlobalStyle`
  
  ${MontserratFont}
  * {   
    margin: 0 auto;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primary: "white",
        secondary: "#2A172D",
    },
    media: {
        phone: "(min-width: 375px) and (max-width: 768px)",
        tablet: "(min-width: 769px) and (max-width: 1240px)"
    }
}



ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Global/>
                    <App/>
                </ThemeProvider>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
