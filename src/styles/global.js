import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  background-color: #f5f5f5;

}

ul { list-style: none; }
a { text-decoration: none; } 
`