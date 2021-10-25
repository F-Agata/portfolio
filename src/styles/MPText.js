import styled from 'styled-components'


const MPText = styled.p`
  //margin-top: 10px;

  @media (min-width: 1080px) {
    //margin-top: ${props => props.presentTime? "0px" : "10px"};
  }
 
  // margin-bottom: ${props => props.presentTime? "10px" : "0px"};
 
`

export default MPText;