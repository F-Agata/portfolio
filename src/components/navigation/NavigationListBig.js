import React from "react";
import styled from 'styled-components'

const NavigationWrapp = styled.div`
  flex-grow: 1;
  align-self: center;`

const NavigationUl = styled.ul`
  display: flex;
  height: 60px;
  justify-content: center;`

const NavigationLi = styled.li`
  margin: 0px 20px;
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  :hover {
    color: #61dafb;
  }`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
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