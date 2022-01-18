import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

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
  },
    {
        name: 'memory1',
        id: 'memory1',
        photo: memory,
        skills: "html, css, jsx",
    },
    {
        name: 'quiz1',
        id: 'quiz1',
        photo: quiz,
        skills: "html, css, jsx",
    },
    {
        name: 'form1',
        id: 'form1',
        photo: form,
        skills: "html, css, jsx",
    }
]


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
                  <WrappInfo>
                      <MPText>{item.skills}</MPText>
                     <TitleOfSection>{item.name}</TitleOfSection>
                  </WrappInfo>
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
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  `

const WrappOneProject = styled.div`
  width: 100%;
  margin: 0 0 40px 0px;
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  bbackground: ${props => props.dataIsActiv ? props.theme.colors.colorPrimary : props.theme.gradients.gradientBox};order-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px;
  align-self: center;
  border-radius: 10px;
  //border: 2px solid pink;
  @media (min-width: 550px) {
     width: 80%;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    width: 49%;
    justify-content: space-between;
    align-self: stretch;
  }
  @media (min-width: 900px) {
    width: 46%;
  }
  @media (min-width: 1080px) {
    width: 32%;
  }
     `

const WrappImgPF = styled.div`
  width: 100%;
  border: 2px solid red;
  border-radius: 10px;
  //@media (min-width: 600px) {
  //  width: 49%;
  //    }
  //@media (min-width: 900px) {
  //  width: 100%;
  //}
  //@media (min-width: 1080px) {
  //  width: 49%;
  //}
  
`

const ImgPF = styled.img`
border-radius: 10px;
width: 100%;
height: 100%;
`

const WrappInfo = styled.div `
  width: 100%;
  border: 2px solid green;
  //@media (min-width: 600px) {
  //  width: 49%;
  //    }
  //@media (min-width: 900px) {
  //  width: 100%;
  //}
  //@media (min-width: 1080px) {
  //  width: 49%;
  //} 
  
`