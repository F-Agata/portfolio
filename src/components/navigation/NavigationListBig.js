import React from "react";
import styled from 'styled-components'

const NavigationWrapp = styled.div`
  flex-grow: 1;
  align-self: center;
  margin-right: 30px;
  //border: 2px solid purple;
`

const NavigationUl = styled.ul`
  display: flex;
  height: 60px;
  justify-content: right;
//border: 2px saddlebrown solid
`

const NavigationLi = styled.li`
  margin-left: 30px;
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  text-align: right;
  :hover {
    color: #61dafb;
  }`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  color: black;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.fontSecondary};
  :hover {
    color: black;
  }`

const NavigationMainListBig = ({ menuItems }) => {

    const menuItem = menuItems.map( (item) => (
        <NavigationLi key={item.id}>
            <NavigationLink href={"#"}>{item.name}</NavigationLink>
        </NavigationLi>
    ));

    return (
        <NavigationWrapp>
            <nav>
                <NavigationUl>
                    {menuItem}
                </NavigationUl>
            </nav>
        </NavigationWrapp>
    )
}

export default NavigationMainListBig;