import React from "react";
import styled from 'styled-components'

import SocialButtons from "../SocialButtons";

import logo from '../../pictures/logo.svg';

const WrappFooter = styled.footer`
  margin:  0 40px;
  padding: 40px ;
  min-width: 375px;
  max-width: 1440px;
  //border: green solid 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //border-radius: 10px;
  // box-shadow: ${props => props.theme.shadows.shadowWhite};
  // background: ${props => props.theme.gradients.gradientBox};
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }`

const WrappLogo = styled.div`
  height: 60px;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0px;
  }
  img {
    height: 28px;
  }
  `

const Logo = styled.img`
  height: 100%;
`

const WrappContact = styled.div`
  margin-top: 30px;
  text-align: right;
  @media (min-width: 992px) {
    margin-top: 0px;
  }
`
const ContactPhone = styled.p`
`

const ContactMail = styled.p`
`


const Footer = () => {

    return (
        <WrappFooter>
            <WrappLogo>
                <Logo src={logo} alt={"logo"}/>
            </WrappLogo>
            <SocialButtons/>
            <WrappContact>
                <ContactPhone>609 594 597</ContactPhone>
                <ContactMail>hello@agataf.pl</ContactMail>
            </WrappContact>
        </WrappFooter>
    )
}

export default Footer