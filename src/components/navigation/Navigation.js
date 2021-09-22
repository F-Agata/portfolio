import React, {useState, useEffect, useLockBodyScroll, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import NavigationListSmall from './NavigationListSmall'
import NavigationListBig from './NavigationListBig'

import logo from '../../pictures/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const iconFaBars = <FontAwesomeIcon icon={faBars} />

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

const NavigationBasicStyle = styled.aside`
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
`
const WrappNavigation = styled.div`
  height: 90px;
  align-self: center;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
    @media (min-width: 992px) {
    padding: 0px 60px
  }`

const WrappLogo = styled.div`
  height: 60px;
  margin-left: 30px;
  text-align: left;
  `

const Logo = styled.img`
  height: 100%;`

const WrapIcon = styled.div`
  height: 30px;
  margin-right: 30px;
  text-align: right;
  `
const ToggleMenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: 32px;
  color:  ${props => props.theme.colors.colorPrimary};
`

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [iconMenu, setIconMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0)
    const [addShadow, setAddShadow] = useState(false)

    const modificationMenuSize = useMediaQuery({query: '(min-width: 992px)' })

    const changeMenu = () => {
        setIsOpen (!isOpen);
        setIconMenu (!iconMenu);
    };

    const resetMenu = () => {
        setIsOpen (false);
        setIconMenu (false);
    };

    const moveScroll = () => {
        setScrollY(window.pageYOffset)
        console.log(scrollY)
        if (scrollY > 120) {
            setAddShadow(true)
        } else setAddShadow(false);
        console.log(addShadow)
    }

    useEffect(() => {
       window.addEventListener("scroll", moveScroll);
       return () => window.removeEventListener("scroll", moveScroll);
    }, [scrollY, addShadow]);

    useEffect(() => {
        resetMenu();
        }, [modificationMenuSize])


    const WrappNavigationShadow = styled(NavigationBasicStyle)`
      ${({theme})=>`
        background: ${addShadow ? theme.colors.colorGray : 'transparent'};
        box-shadow: ${addShadow ? theme.shadows.shadowWhite : 'none'};
      `};
    `
    return (
        <WrappNavigationShadow>
         <WrappNavigation>
            <WrappLogo>
                <Logo src={logo} alt={"logo"}/>
            </WrappLogo>
            { modificationMenuSize ? null :
            <WrapIcon>
                <ToggleMenuButton onClick={changeMenu}>
                  {iconFaBars}
                </ToggleMenuButton>
            </WrapIcon>}
            { isOpen && !modificationMenuSize ?
                <NavigationListSmall menuItems={menuItems} changeMenu={changeMenu}/> : null}
            { modificationMenuSize &&
                <NavigationListBig menuItems={menuItems} />}
        </WrappNavigation>
        </WrappNavigationShadow>
    )
}

export default Navigation;