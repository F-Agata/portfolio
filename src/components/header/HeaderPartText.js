import React from 'react'
import styled from 'styled-components'

import SkillButtons from '../SkillButtons'
import SocialButtons from '../SocialButtons'
import TypeIt from 'typeit-react'

const HeaderPartText = () => {
  return (
    <WrappHeaderInformations>
      <Welcome>
        <TypeWrapper>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type('Cześć,')
                .pause(300)
                .type(' jestem <span style="color: #ff014f; font-size: 30px; font-weight: 700; letter-spacing: 2px">Agata</span> ')
                .break()
                .type('Moim')
                .pause(300).delete(3)
                .type('ój cel zawodowy, to dalszy rozwój')
                .break()
                .type('jako <span style="color: #ff014f; font-size: 28px; letter-spacing: 2px">Front-end developer </span>')
              return instance
            }}
          />
        </TypeWrapper>
      </Welcome>
      <InformationAboutMe>Tutaj napiszę kilka słów o mnie. W tym momencie powstaje struktura strony. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem ducimus earum eligendi facilis incidunt laudantium magni minus nostrum, omnis qui, suscipit, ullam veniam. Aut dolore eligendi eos ex necessitatibus!</InformationAboutMe>
      <WrappSocialAndSkillButtons>
        <SocialButtons />
        <SkillButtons />
      </WrappSocialAndSkillButtons>
    </WrappHeaderInformations>
  )
}

export default HeaderPartText

const WrappHeaderInformations = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;  
margin: 50px 0 30px 0;
  @media (min-width: 992px) {
    margin: 0;
  }`

const Welcome = styled.div`
  width: 100%;
  font-family: ${props => props.theme.fonts.fontSecondary};
  font-size: ${props => props.theme.fontSizes.fsB1};  
  text-transform: uppercase;
  letter-spacing: 1px;
 `

const InformationAboutMe = styled.p`
width: 100%;
  margin: 30px 0;
  @media (min-width: 992px) {
    //border: #61dafb 2px solid;
     }
`

const WrappSocialAndSkillButtons = styled.div`
  //border: #61dafb 2px solid;
width: 100%;
 display: flex;
flex-direction: column;
align-items: flex-start;  
justify-content: space-between;
margin-top: 30px;
  @media (min-width: 550px) {
    //border: #61dafb 2px solid;
    flex-direction: row;
  }`

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`
