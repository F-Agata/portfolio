import styled from 'styled-components'


const Circle = styled.div`
  width: ${props => props.theme.fontSizes.fsB2};
  height: ${props => props.theme.fontSizes.fsB2};
  border: 4px solid ${props => props.theme.colors.colorGrayLighter};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.colorGray};
  position: absolute;
  left: -66px;
  @media (min-width: 1080px) {
    left: 31px;
    top: -52px;
    
  }
`;

export default Circle;