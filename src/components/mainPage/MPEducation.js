import React from "react";
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import WrappLineDecoration from "../WrappLineDecoration";

import WrappMPOneItem from "../../styles/WrappMPOneItem";
import TitleOfSection from "../../styles/TitleOfSection";
import SmallTitleMPOneItem from "../../styles/SmallTitleMPOneItem";
import Circle from "../../styles/Circle";
import DashFromTheCircle from "../../styles/DashFromTheCircle";
import WrappMPEssence from "../../styles/WrappMPEssence";



const WrappMPEducation = styled.div`
  width: 100%;
  //border: 2px solid orangered;
  display: flex;
`

const TitleEducation = styled(TitleOfSection)`
  width: 100%;
  margin: 0 0 40px 0;
   `

const WrappOneSchool = styled(WrappMPOneItem)` 
    position: relative;
`

const Yers = styled(SmallTitleMPOneItem)`

//border: #61dafb 2px solid;
margin-top:  ${props => props.mgrfarm ? '10px' : '0px'};
border-bottom-width: ${props => props.mgrfarm ? '0px' : '1px'};
font-size: ${props => props.mgrfarm ? props.theme.fontSizes.fsB3 : props.theme.fontSizes.fsB1 };
  
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
            <WrappMPEssence>
                <TitleEducation>
                     Edukacja
                </TitleEducation>
                { showDecorationLine ?
                    <WrappLineDecoration/> : null}
                <WrappOneSchool>
                    <Circle/>
                    <DashFromTheCircle/>
                   <Yers> 2005 – 2011  </Yers>
                   <NameOfSchool> Śląski Uniwersytet Medyczny w Katowicach </NameOfSchool>
                   <NameOfSchool> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</NameOfSchool>
                   <Yers mgrfarm> mgr farmacji  </Yers>
                </WrappOneSchool>
                <WrappOneSchool>
                    <Circle/>
                    <DashFromTheCircle/>
                   <Yers> 2002 – 2005 </Yers>
                   <NameOfSchool> I Liceum Ogólnokształcące im. Leona Kruczkowskiego w Tychach</NameOfSchool>
                </WrappOneSchool>
             </WrappMPEssence>
        </WrappMPEducation>
    )
}

export default MPEducation