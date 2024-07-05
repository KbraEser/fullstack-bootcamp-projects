import "./style.css";
import workintechLogo from "/workintech.svg";
import { setupCounter } from "./counter.js";
import javascriptLogo from "./javascript.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://github.com/Workintech/fsweb-s5-side-project-pizza" target="_blank">
      <img src="${workintechLogo}" class="logo" alt="Workintech logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Coder!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Workintech logo to see the Readme of the project
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
