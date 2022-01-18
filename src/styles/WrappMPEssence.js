import styled from 'styled-components'

const WrappMPEssence = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  //border: 2px solid olive;
  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export default WrappMPEssence
