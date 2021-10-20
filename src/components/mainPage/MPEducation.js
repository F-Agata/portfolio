import React from "react";
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import WrappLineDecoration from "../WrappLineDecoration";

import WrappMPOneItem from "../../styles/WrappMPOneItem";
import TitleOfSection from "../../styles/TitleOfSection";
import SmallTitleMPOneItem from "../../styles/SmallTitleMPOneItem";
import Circle from "../../styles/Circle";
import DashFromTheCircle from "../../styles/DashFromTheCircle";
import NavigationListSmall from "../navigation/NavigationListSmall";


const WrappMPEducation = styled.div`
  width: 100%;
  //border: 2px solid orangered;
  display: flex;
`

const TitleEducation = styled(TitleOfSection)`
  width: 100%;
  margin: 0 0 20px 0;
  padding-bottom: 20px;
  //border-bottom: 5px solid ${props => props. theme.colors.colorGrayLighter} ;
 `

const WrappMPText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  //border: 2px solid olive;
  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
const WrappOneSchool = styled(WrappMPOneItem)` 
    position: relative;
`

const Yers = styled(SmallTitleMPOneItem)`
  //border: #61dafb 2px solid;
  margin-top:  ${props => props.mgrfarm ? '10px' : '0px'};
   `

const NameOfSchool = styled.p`
    margin: 10px 0 0 0 ;
`
const MPEducation = () => {

    const showDecorationLine = useMediaQuery({query: '(min-width: 1080px)' })

    return (
        <WrappMPEducation>
            { !showDecorationLine ?
                <WrappLineDecoration/> : null}
            <WrappMPText>
                <TitleEducation>
                     Edukacja
                </TitleEducation>
                { showDecorationLine ?
                    <WrappLineDecoration/> : null}
                <WrappOneSchool>
                    <Circle/>
                    <DashFromTheCircle/>
                   <Yers> 2005 – 2011  </Yers>
                   <Yers mgrfarm> mgr farmacji  </Yers>
                   <NameOfSchool> Śląski Uniwersytet Medyczny w Katowicach </NameOfSchool>
                   <NameOfSchool> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</NameOfSchool>
                </WrappOneSchool>
                <WrappOneSchool>
                    <Circle/>
                    <DashFromTheCircle/>
                   <Yers> 2002 – 2005 </Yers>
                   <NameOfSchool> I Liceum Ogólnokształcące im. Leona Kruczkowskiego w Tychach</NameOfSchool>
                </WrappOneSchool>
            </WrappMPText>
        </WrappMPEducation>
    )
}

export default MPEducation