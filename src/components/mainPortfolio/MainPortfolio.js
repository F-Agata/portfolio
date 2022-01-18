import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import WrappMPOneItem from "../../styles/WrappMPOneItem";
import MPText from "../../styles/MPText";
import TitleOfSection from "../../styles/TitleOfSection";

import form from "../../pictures/form.png"
import memory from "../../pictures/memory.png"
import quiz from "../../pictures/quiz.png"

const portfolioArray = [
  {
    name: 'memory',
    id: 'memory',
    photo: memory,
    skills: "html, css, jsx",
  },
  {
    name: 'quiz',
    id: 'quiz',
    photo: quiz,
    skills: "html, css, jsx",
  },
  {
    name: 'form',
    id: 'form',
    photo: form,
    skills: "html, css, jsx",
  }
]

// { setIsActiveProject({...isActiveProjects, [`isActiveProject${index+1}`]: true }) }

const MainPortfolio = () => {

  const [isActiveProjects, setIsActiveProject] = useState({
    isActiveProject1: false,
    isActiveProject2: false,
    isActiveProject3: false,
      });

  const onMouseEnterChangeActive = (e, isActiveProject) => {
      setIsActiveProject({
                ...isActiveProjects,
                [isActiveProject]: true
            });}

  const onMouseLeaveChangeActive = (e, isActiveProject) => {
          setIsActiveProject({
              ...isActiveProjects,
              [isActiveProject]: false
          });}


  const showDecorationLine = useMediaQuery({ query: '(min-width: 1080px)' })

  const oneProject = portfolioArray.map((item, index) => {

  const isActive = isActiveProjects[`isActiveProject${index + 1}`]

          return (
              <WrappOneProject key={item.id}
                               onMouseEnter={(e) => onMouseEnterChangeActive(e, `isActiveProject${index + 1}`)}
                               onMouseLeave={(e) => onMouseLeaveChangeActive(e, `isActiveProject${index + 1}`)}
                               dataIsActiv={isActive}
              >
                  <WrappImgPF>
                      <ImgPF src={item.photo} />
                  </WrappImgPF>
                  <MPText>{item.skills}</MPText>
                  <TitleOfSection>{item.name}</TitleOfSection>
              </WrappOneProject>
          )
      }
      );
    // useEffect(()=>{console.log('dataIsActive', dataIsActive)},[dataIsActive])

  return (
    <WrappMainPortfolio>
      {oneProject}
    </WrappMainPortfolio>
  )
};

export default MainPortfolio

const WrappMainPortfolio = styled.section`
  margin: 40px 40px 0 40px;
  padding-bottom: 40px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${props => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: limegreen solid 2px;
  @media (min-width: 992px) {
     }`

const WrappOneProject = styled.div`
  margin: 0 0 40px 0px;
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  bbackground: ${props => props.dataIsActiv ? props.theme.colors.colorPrimary : props.theme.gradients.gradientBox};order-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px;
  //border: 2px solid red;
  //align-self: stretch;
  @media (min-width: 1080px) {
    
  }
\`
  
  `


const WrappImgPF = styled.div`
  border: 2px solid red;
  border-radius: 5px;
`

const ImgPF = styled.img`
width: 100%;
height: 100%;`