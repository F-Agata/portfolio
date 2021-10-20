import styled from 'styled-components'


const SmallTitleMPOneItem = styled.h4`
  font-size: ${props => props.theme.fontSizes.fsB1};
  font-weight: 400;
  color:  ${props => props.theme.colors.colorText};
  border-bottom: 1px solid ${props => props.theme.colors.colorPrimary};
  `;

export default SmallTitleMPOneItem;