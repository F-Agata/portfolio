import  styled, {ThemeProvider} from 'styled-components'

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import Navigation from "./components/navigation/Navigation";

const AppWrapp = styled.div`
  max-width: 1440px;
  min-width: 375px;
  margin: 0 auto;
  text-align: center;
  min-height: 200vh;
  font-size: 18px;
  font-family: 'arial', sans-serif;
  color: hsl(233, 26%, 24%);`

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
            <AppWrapp>
                <Navigation/>
            </AppWrapp>
      </ThemeProvider>
  );
}

export default App;
