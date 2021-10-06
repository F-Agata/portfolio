import React from 'react'
import styled from 'styled-components';

import SkillButtons from "../SkillButtons";
import SocialButtons from "../SocialButtons";

const WrappHeaderInformations = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;  
margin: 50px 0 30px 0;
  @media (min-width: 992px) {
    margin: 0;
  }`

const Welcome = styled.h1`
  width: 100%;
  font-family: ${props => props.theme.fonts.fontSecondary};
  font-size: ${props => props.theme.fontSizes.fsB1};  
  text-transform: uppercase;
  letter-spacing: 2px;
 `

const InformationAboutMe = styled.p`
width: 100%;
  margin: 30px 0;
  @media (min-width: 992px) {
    //border: #61dafb 2px solid;
     }
`

const WrappSocialAndSkillButtons = styled.div`
width: 100%;
display: flex;
justify-content: left;
margin-top: 30px;
  @media (min-width: 992px) {
    //border: #61dafb 2px solid;
  }`


const HeaderPartText = () => {

    return (
        <WrappHeaderInformations>
            <Welcome>Witaj na mojej stronie</Welcome>
            <InformationAboutMe>Tutaj napiszę kilka słów o mnie. W tym momencie powstaje struktura strony. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem ducimus earum eligendi facilis incidunt laudantium magni minus nostrum, omnis qui, suscipit, ullam veniam. Aut dolore eligendi eos ex necessitatibus!</InformationAboutMe>
            <WrappSocialAndSkillButtons>
                <SocialButtons/>
                <SkillButtons/>
            </WrappSocialAndSkillButtons>
        </WrappHeaderInformations>

    )
}

export default HeaderPartText