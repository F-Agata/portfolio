import React from 'react';
import styled from 'styled-components';

const NavigationMainListBig = ({ menuItems }) => {
  const menuItem = menuItems.map((item) => (
    <NavigationLi key={item.id}>
      <NavigationLink href={`#${item.id}`}>{item.name}</NavigationLink>
    </NavigationLi>
  ));

  return (
    <NavigationWrapp>
      <nav>
        <NavigationUl>{menuItem}</NavigationUl>
      </nav>
    </NavigationWrapp>
  );
};

export default NavigationMainListBig;

const NavigationWrapp = styled.div`
  align-self: center;
  //margin-right: 30px;
  //border: 2px solid purple;
`;

const NavigationUl = styled.ul`
  display: flex;
  height: 60px;
  justify-content: right;
  //border: 2px saddlebrown solid;
  transition: 0.3s;
  :hover a {
    color:  ${(props) => props.theme.colors.colorGrayMid};
`;

const NavigationLi = styled.li`
  margin-left: 30px;
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  text-align: right;
  transition: 0.3s;
  :hover a {
    color: ${(props) => props.theme.colors.colorText};
  }
`;

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  color: ${(props) => props.theme.colors.colorText};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  font-size: ${(props) => props.theme.fontSizes.fsB1};
  font-weight: bold;
  letter-spacing: 2px;
  transition: 0.3s;
  :active {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
