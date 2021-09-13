import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import navigationClose from '../../pictures/icon-location.svg'
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from "../../pictures/logo.svg";


const NavigationWrapp = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;`

const NavigationListWrapp = styled.div`
  background-color:  ${props => props.theme.colors.colorGray};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 20px;
  padding-right: 30px`

const TopMenu = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.colorBorder};
  margin: 10px 0 30px 0;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between`

const WrappLogo = styled.div`
  height: 25px;
  text-align: left;
  border: 2px solid red;`

const Logo = styled.img`
  height: 100%;`

const WrapIcon = styled.div`
  height: 25px;
  text-align: right;
  border: 2px solid red;`

const Icon = styled.img`
  height: 100%;`

const NavigationNav = styled.nav`
   //border: aquamarine 2px solid;
   flex-grow: 1; 
   text-align: left`

const NavigationUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 60px;
  //border: red 2px solid`

const NavigationLi = styled.li`
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  :hover a {
    color: red;
  }`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  color: black;
  text-transform: uppercase`

const BottomMenu = styled.div`
  margin: 30px 0px 50px 0px;
  text-align: left;
  //border: yellow 2px solid;`

const NavigationMainListSmall = ({ menuItems, changeMenu }) => {

    const menuItem = menuItems.map( (item) => (
        <NavigationLi key={item.id}>
            <NavigationLink href={"#"}>{item.name}</NavigationLink>
        </NavigationLi>
    ));

    return (
        <NavigationWrapp>
            <NavigationListWrapp>
             <TopMenu>
                 <WrappLogo>
                     <Logo src={logo} alt={"logo"}/>
                 </WrappLogo>
                 <WrapIcon>
                     <Icon onClick={changeMenu} src={ navigationClose} alt={"close"}/>
                 </WrapIcon>
             </TopMenu>
             <NavigationNav>
                <NavigationUl>
                    {menuItem}
                </NavigationUl>
             </NavigationNav>
             <BottomMenu>
                 kontakt
             </BottomMenu>
            </NavigationListWrapp>
        </NavigationWrapp>
    )
}

export default NavigationMainListSmall;