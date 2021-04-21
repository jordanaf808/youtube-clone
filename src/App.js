import Container from './components/Container';

// import './App.css';

import { ThemeProvider } from './ThemeContext';

import GlobalStyle from './GlobalStyle.styled';

// const theme = {
//   borderColor: 'green',
//   color: 'green',
//   bgColor: 'green',
//   fontFamily: 'sans serif',
// };

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <GlobalStyle />
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
