import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'

import NavigationListSmall from './NavigationListSmall'
import NavigationListBig from './NavigationListBig'

import logo from '../../pictures/logo.svg';
import navigationOpen from '../../pictures/icon-phone.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    {name: "Strona 1",
     id: "menu1",},
    {name: "Strona 2",
     id: "menu2",},
    {name: "Strona 3",
     id: "menu3",},
    {name: "Strona 4",
     id: "menu4",},
    {name: "Strona 5",
     id: "menu5",}]

const WrappNavigation = styled.aside`
  height: 90px;
  align-self: center;
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color:  ${props => props.theme.colors.colorGray};
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  z-index: 10;

  @media (min-width: 992px) {
    max-width: 1440px;
    padding: 0px 60px
  }`

const WrappLogo = styled.div`
  height: 25px;
  margin-left: 20px;
  text-align: left;
  border: 2px solid red;`

const Logo = styled.img`
  height: 100%;`

const WrapIcon = styled.div`
  height: 25px;
  margin-right: 20px;
  text-align: right;
  border: 2px solid red;`

const Icon = styled.img`
  height: 100%;`

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [iconMenu, setIconMenu] = useState(false);

    const modificationMenuSize = useMediaQuery({query: '(min-width: 768px)' })

    const changeMenu = () => {
        setIsOpen (!isOpen);
        setIconMenu (!iconMenu);
    };

    return (
        <WrappNavigation>
            <WrappLogo>
                <Logo src={logo} alt={"logo"}/>
            </WrappLogo>
            { modificationMenuSize ? null :
            <WrapIcon>
                <Icon onClick={changeMenu} src={ navigationOpen} alt={"menu"}/>
            </WrapIcon>}
            { isOpen && !modificationMenuSize ?
                <NavigationListSmall menuItems={menuItems} changeMenu={changeMenu}/> : null}
            { modificationMenuSize &&
                <NavigationListBig menuItems={menuItems}/>}
        </WrappNavigation>
    )
}

export default Navigation;