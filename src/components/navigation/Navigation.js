import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'

import logo from '../../pictures/logo.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const menuItems = ["Strona 1", "Strona 2", "Strona 3", "Strona 4", "Strona 5"]

const WrappNavigation = styled.aside`
  height: 60px;
  align-self: center;
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: tan;
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

    const changeMenu = () => {
        setIsOpen (!isOpen);
        setIconMenu (!iconMenu);
    };

    return (
        <WrappNavigation>
            <WrappLogo>
                <Logo src={logo} alt={"logo"}/>
            </WrappLogo>
            <WrapIcon>
                <Icon onClick={changeMenu} src={ iconMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} /> } alt={"menu"}/>
            </WrapIcon>
        </WrappNavigation>
    )
}

export default Navigation;