import  {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
  
      body {
        background: ${props => props.theme.gradients.gradientBox};
        
      }
`
export default GlobalStyle