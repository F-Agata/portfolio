import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebook} from '@fortawesome/free-solid-svg-icons';

const iconFaFacebook = <FontAwesomeIcon icon={faFacebook} />

const Invitation = styled.p`
  color: ${props => props.theme.colors.colorText};
  font-size: ${props => props.theme.fontSizes.fsB3};
  font-family: ${props => props.theme.fonts.fontPrimary};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const NavigationMainListSmall = ({ menuItems, changeMenu }) => {

      return (
          <div>
        <Invitation>Znajdziesz mnie tu</Invitation>
              {iconFaFacebook}
          </div>

    )
}

export default NavigationMainListSmall;
