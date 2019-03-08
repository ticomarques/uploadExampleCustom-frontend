import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css'; 

export const cssVars = {
    firstColor: "#7159c1",
    secondColor: "#78e5d5",
    thirdColor: "#e57878",
    fourthColor: "#ddd",
    fifthColor: "#999",
    sixthColor: "#444",
    fontSizeSmall: "12px",
    fontSizeMedium: "14px",
    borderRadiusDefault: "4px"
}

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: ${cssVars.firstColor};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing:antialiased;
    }

    html, body, #root {
        height: 100%;

    }
`;

