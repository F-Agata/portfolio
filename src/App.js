import  styled, {ThemeProvider} from 'styled-components'

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";

const AppWrapp = styled.div`
  min-width: 375px;
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  min-height: 200vh;
  font-size: 18px;
  background-color: transparent;
  font-family: 'Allison' ;
  overflow: hidden;`

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
            <AppWrapp>
                <Navigation/>
                <Header/>
            </AppWrapp>
      </ThemeProvider>
  );
}

export default App;
