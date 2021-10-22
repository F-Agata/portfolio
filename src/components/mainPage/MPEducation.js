import React, { useState } from "react";
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import WrappLineDecoration from "../WrappLineDecoration";

import WrappMPOneItem from "../../styles/WrappMPOneItem";
import TitleOfSection from "../../styles/TitleOfSection";
import SmallTitleMPOneItem from "../../styles/SmallTitleMPOneItem";
import Circle from "../../styles/Circle";
import DashFromTheCircle from "../../styles/DashFromTheCircle";
import WrappMPEssence from "../../styles/WrappMPEssence";
import WrappMPSection from "../../styles/WrappMPSection";
import MPText from "../../styles/MPText";

const Mgrfarm = styled(SmallTitleMPOneItem)`
//border: #61dafb 2px solid;
margin-top: 10px;
border-bottom: none;
font-size: ${props => props.theme.fontSizes.fsB3};
`

const MPEducation = () => {

    const showDecorationLine = useMediaQuery({query: '(min-width: 1080px)' })

    const [isActiveEdu1, setIsActiveEdu1] = useState(false);
    const [isActiveEdu2, setIsActiveEdu2] = useState(false);

    return (
        <WrappMPSection>
            { !showDecorationLine ?  <WrappLineDecoration/> : null}
            <WrappMPEssence>
                <TitleOfSection>
                     Edukacja
                </TitleOfSection>
                { showDecorationLine ? <WrappLineDecoration/> : null}
                <WrappMPOneItem
                    onMouseEnter={()=>{setIsActiveEdu1(true)}}
                    onMouseLeave={()=>{setIsActiveEdu1(false)}}
                >
                    <Circle isActive={isActiveEdu1}/>
                    <DashFromTheCircle/>
                   <SmallTitleMPOneItem> 2005 – 2011  </SmallTitleMPOneItem>
                   <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
                   <MPText> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</MPText>
                   <Mgrfarm> mgr farmacji  </Mgrfarm>
                </WrappMPOneItem>
                <WrappMPOneItem
                    onMouseEnter={()=>{setIsActiveEdu2(true)}}
                    onMouseLeave={()=>{setIsActiveEdu2(false)}}
                >
                    <Circle isActive={isActiveEdu2}/>
                    <DashFromTheCircle/>
                   <SmallTitleMPOneItem> 2002 – 2005 </SmallTitleMPOneItem>
                   <MPText> I Liceum Ogólnokształcące im. Leona Kruczkowskiego w Tychach</MPText>
                </WrappMPOneItem>
             </WrappMPEssence>
        </WrappMPSection>
    )
}

export default MPEducation