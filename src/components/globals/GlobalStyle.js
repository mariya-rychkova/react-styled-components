import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "../../styles";

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Nanum+Gothic&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: $(setColor.mainBlack);
    background: $(setColor.mainWhite);
    font-size: 100%;
    $(setFont.main);

}

  h1 {
    font-size: 3em;
    line-height:1.2;
    margin-botton:0.5em;
  }

  h2 {
    font-size: 2em;
    margin-botton:0.75em;
  }

  h3 {
    font-size: 1.5em;
    line-height:1;
    margin-botton:1em;
  }

  h4 {
    font-size: 1.2em;
    line-height:1.2;
    margin-botton:1.25em;
    font-weight:bold;
  }

  h5 {
    font-size: 1em;
    margin-botton:1.5em;
    font-weight:bold;
  }

  h6 {
    font-size: 1em;
    font-weight:bold;

  p {
    line-height: 1.5;
    margin: 0 0 1.5 0;
  }
`;
export default Globals;
