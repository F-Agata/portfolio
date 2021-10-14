import React from "react";
import styled from 'styled-components'

const WrappMPNavigation = styled.div`
  width: 100%;
  margin: 0;
  min-width: 375px;
  max-width: 1440px; 
  //border: green solid 2px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  background: ${props => props.theme.gradients.gradientBox};
  @media (min-width: 992px) {
    height: 90px;

  }`

const NavigationUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 2px saddlebrown solid;
  @media (min-width: 992px) {
    flex-direction: row;
    height: 90px;
  
`

const NavigationLi = styled.li`
  list-style: none;
  cursor: pointer;
  line-height: 90px;
  text-align: center;
  transition: 0.3s;
  width: 100%;
  border-radius: 10px;
  //border: rebeccapurple 2px solid;
  :hover {
    height: 90px;
    box-shadow: ${props => props.theme.shadows.shadowWhite};
    background: ${props => props.theme.gradients.gradientBox};
  }
  // :active {
  //   height: 90px;
  //   box-shadow: ${props => props.theme.shadows.shadowWhite};
  //   background: ${props => props.theme.gradients.gradientBox};
  // }
  :hover a {
    color:  ${props => props.theme.colors.colorPrimary};
  }`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  color: ${props => props.theme.colors.colorText};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.fontSecondary};
  font-weight: 700;
  letter-spacing: 2px;
  font-size: ${props => props.theme.fontSizes.fsB1};
  transition: 0.3s;
  :active {
    color:  ${props => props.theme.colors.colorPrimary}}`

const MPNavigation = ({mpNavigationArray}) => {

    const npNavigationItem = mpNavigationArray.map( (item) => (
        <NavigationLi key={item.id}>
            <NavigationLink href={"#"}>{item.name}</NavigationLink>
        </NavigationLi>
    ));

    return (
        <WrappMPNavigation>
            <nav>
                <NavigationUl>
                    {npNavigationItem}
                </NavigationUl>
            </nav>
        </WrappMPNavigation>
    )
}

export default  MPNavigation