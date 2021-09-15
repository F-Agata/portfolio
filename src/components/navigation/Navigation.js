import React, {useState, useEffect} from 'react'
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

const WrappWrappNavigation = styled.aside`
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  z-index: 10;
  
  box-shadow: none;
  
  ${({theme, addShadow})=>`
    box-shadow: ${addShadow !== true && theme.shadows.shadowWhite};
  `};
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
  border: 2px solid red;`

const Logo = styled.img`
  height: 100%;`

const WrapIcon = styled.div`
  height: 30px;
  margin-right: 30px;
  text-align: right;
  border: 2px solid red;`

const Icon = styled.img`
  height: 100%;`

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

    const moveScroll = () => {
        setScrollY(window.pageYOffset)
        console.log(scrollY)
        if (scrollY > 150) {
            setAddShadow(true)
        } else setAddShadow(false);
        console.log(addShadow)
    }

    useEffect(() => {
       window.addEventListener("scroll", moveScroll);
       return () => window.removeEventListener("scroll", moveScroll);
    }, [scrollY, addShadow])


    return (
        <WrappWrappNavigation>
         <WrappNavigation addShadow>
                {addShadow ? 'Hello' : 'NoHello'}
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
        </WrappWrappNavigation>
    )
}

export default Navigation;