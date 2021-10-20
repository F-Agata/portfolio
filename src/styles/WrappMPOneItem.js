import styled from 'styled-components'


const WrappMPOneItem = styled.div`
  //width: 100%;
  margin: 0 0 40px 0px ;
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  background: ${props => props.theme.gradients.gradientBox};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px;
  //border: 2px solid red;
  align-self: stretch;
  @media (min-width: 1080px) {
    margin-left: 0;
    width: 49%;
  }
`

export default WrappMPOneItem;