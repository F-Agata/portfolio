import  {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
  
      body {
        background-color:  ${props => props.theme.colors.colorGray};
      }
`
export default GlobalStyle