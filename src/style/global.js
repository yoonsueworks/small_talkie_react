import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
${reset}  
* {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 486px;
    height: 908px;
    background-color: white;
  }

  body {
    padding: 20px;
    display: flex;
    justify-content: center;
    font-family: "Noto Sans KR", sans-serif;  
    background-color: aliceblue;
  }
`;
export default GlobalStyle;
