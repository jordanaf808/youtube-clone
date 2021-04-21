import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  box-sizing: border-box;
}

:root {
  --bg: #fefefe;
  --border: 1px solid #c7c7c7;
  --box-shadow: 0 1px 0 #00000010;
  --accent: #fe0000;
  --text: #474747;
  --button: #575757;
  --button-bg: #eeeeee;
  --button-bg-hover: #ededed;
}

body {
  // display: flex;
  // flex-wrap: wrap;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;
