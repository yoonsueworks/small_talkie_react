import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
${reset}  
* {
    box-sizing: border-box; 
  }

  body{
      font-family: "Noto Sans KR", sans-serif;   
    }
`;
export default GlobalStyle;
