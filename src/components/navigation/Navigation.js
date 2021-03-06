import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import NavigationListSmall from './NavigationListSmall';
import NavigationListBig from './NavigationListBig';

import logo from '../../pictures/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const iconFaBars = <FontAwesomeIcon icon={faBars} />;

const menuItems = [
  {
    name: 'o mnie',
    id: 'header',
  },
  {
    name: 'rozwój',
    id: 'mainPage',
  },
  {
    name: 'Portfolio',
    id: 'mainPortfolio',
  },
  {
    name: 'Kontakt',
    id: 'footer',
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconMenu, setIconMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [addShadow, setAddShadow] = useState(false);

  const modificationMenuSize = useMediaQuery({ query: '(min-width: 992px)' });

  const changeMenu = () => {
    setIsOpen(!isOpen);
    setIconMenu(!iconMenu);
  };

  const resetMenu = () => {
    setIsOpen(false);
    setIconMenu(false);
  };

  const moveScroll = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 120) {
      setAddShadow(true);
    } else setAddShadow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', moveScroll);
    return () => window.removeEventListener('scroll', moveScroll);
  }, [scrollY, addShadow]);

  useEffect(() => {
    resetMenu();
  }, [modificationMenuSize]);

  return (
    <WrappNavigationShadow addShadow={addShadow}>
      <WrappNavigation>
        <WrappLogo>
          <WrappLogoLink href={'#header'}>
            <Logo src={logo} alt="logo" />
          </WrappLogoLink>
        </WrappLogo>
        {modificationMenuSize ? null : (
          <WrapIcon>
            <ToggleMenuButton onClick={changeMenu}>
              {iconFaBars}
            </ToggleMenuButton>
          </WrapIcon>
        )}
        {isOpen && !modificationMenuSize ? (
          <NavigationListSmall menuItems={menuItems} changeMenu={changeMenu} />
        ) : null}
        {modificationMenuSize && <NavigationListBig menuItems={menuItems} />}
      </WrappNavigation>
    </WrappNavigationShadow>
  );
};

export default Navigation;

const NavigationBasicStyle = styled.aside`
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const WrappNavigationShadow = styled(NavigationBasicStyle)`
  ${({ theme, addShadow }) => `
    background: ${addShadow ? theme.colors.colorGray : 'transparent'};
    box-shadow: ${addShadow ? theme.shadows.shadowWhite : 'none'};
  `};
`;

const WrappNavigation = styled.div`
  height: 90px;
  align-self: center;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 992px) {
    padding: 0px 40px;
  }
`;

const WrappLogo = styled.div`
  height: 60px;
  margin-left: 40px;
  padding-top: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  img {
    height: 40px;
  }
  @media (min-width: 992px) {
    margin-left: 0px;
  }
`;

const WrappLogoLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 100%;
`;

const WrapIcon = styled.div`
  height: 30px;
  margin-right: 40px;
  text-align: right;
  @media (min-width: 992px) {
    margin-right: 0px;
  }
`;
const ToggleMenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: 32px;
  color: ${(props) => props.theme.colors.colorPrimary};
`;
