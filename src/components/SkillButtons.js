import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimes } from '@fortawesome/free-solid-svg-icons';

const iconFaXMark = <FontAwesomeIcon icon={faTimes} />

const skillIconsArray = [
    {name: iconFaXMark,
        id: "iconFaXMark11",
        path: 'https://www.geeksforgeeks.org/how-to-create-an-html-button-that-acts-like-a-link/',},
    {name: iconFaXMark,
        id: "iconFaXMark22",
        path: 'https://www.geeksforgeeks.org/how-to-create-an-html-button-that-acts-like-a-link/',},
    {name: iconFaXMark,
        id: "iconFaXMark33",
        path: 'https://www.geeksforgeeks.org/how-to-create-an-html-button-that-acts-like-a-link/',},
]

const WrappSkillButtons = styled.div`
    display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 200px;
  margin-left: 100px;
`
const Invitation = styled.p`
  width: 100%;
  color: ${props => props.theme.colors.colorText};
  font-size: ${props => props.theme.fontSizes.fsB3};
  font-family: ${props => props.theme.fonts.fontPrimary};
  text-transform: uppercase;
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
  color:   ${props => props.theme.colors.colorText};
        `

const SkillButtons = () => {

    const skillIcon = skillIconsArray.map( (item) => (
        <WrappIcon key={item.id} href={item.path} >
            {item.name}
        </WrappIcon>
    ));

    return (
        <WrappSkillButtons>
            <Invitation>Moje umiejętności</Invitation>
            <WrappIcons>
                {skillIcon}
            </WrappIcons>
        </WrappSkillButtons>

    )
}

export default SkillButtons;
