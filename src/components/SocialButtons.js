import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimes } from '@fortawesome/free-solid-svg-icons';

const iconFaXMark = <FontAwesomeIcon icon={faTimes} />

const socialIconsArray = [
    {name: iconFaXMark,
        id: "iconFaXMark1",
        path: 'https://www.geeksforgeeks.org/how-to-create-an-html-button-that-acts-like-a-link/',},
    {name: iconFaXMark,
        id: "iconFaXMark2",
        path: 'https://www.geeksforgeeks.org/how-to-create-an-html-button-that-acts-like-a-link/',},
    {name: iconFaXMark,
        id: "iconFaXMark3",
        path: 'https://www.geeksforgeeks.org/how-to-create-an-html-button-that-acts-like-a-link/',},
   ]

const WrappSocialButtons = styled.div`
  //border: red 2px solid;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 200px;
`
const Invitation = styled.p`
  width: 100%;
  color: ${props => props.theme.colors.colorText};
  font-size: ${props => props.theme.fontSizes.fsB3};
  font-family: ${props => props.theme.fonts.fontPrimary};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 700;
`

const WrappIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const WrappIcon = styled.a`
  flex-basis: 50px;
  height: 50px;
  border: none;
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  background: ${props => props.theme.gradients.gradientBox};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.fsB2};
  color:  ${props => props.colorPrimary ? props.theme.colors.colorPrimary : props.theme.colors.colorText};
        `

const SocialButtons = ({colorPrimary}) => {

    const socialIcon = socialIconsArray.map( (item) => (
            <WrappIcon key={item.id} href={item.path} colorPrimary={colorPrimary}>
                {item.name}
            </WrappIcon>

    ));

      return (
          <WrappSocialButtons>
            <Invitation>Znajdziesz mnie tu</Invitation>
            <WrappIcons>
                {socialIcon}
            </WrappIcons>
          </WrappSocialButtons>

    )
}

export default SocialButtons;
