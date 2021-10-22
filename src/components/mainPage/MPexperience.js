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

const MPExperience = () => {

    const showDecorationLine = useMediaQuery({query: '(min-width: 1080px)' })

    const [isActiveExp1, setIsActiveExp1] = useState(false);
    const [isActiveExp2, setIsActiveExp2] = useState(false);

    return (
        <WrappMPSection>
            { !showDecorationLine ?
                <WrappLineDecoration/> : null}
            <WrappMPEssence>
                <TitleOfSection>
                    Doświadczenie zawodowe
                </TitleOfSection>
                { showDecorationLine ?
                    <WrappLineDecoration/> : null}
                <WrappMPOneItem>
                    <Circle/>
                    <DashFromTheCircle/>
                    <SmallTitleMPOneItem>od 09.2021 do obecnie</SmallTitleMPOneItem>
                    <MPText>Staż w Rubinowe Sp. z o.o. </MPText>
                    <MPText>stanowisko: junior front-end developer </MPText>
                    <MPText>Zakres obowiązków: </MPText>
                    <ul>
                        <li>stylowanie komponentów</li>
                        <li>tworzenie widoków stron w React jsx</li>
                    </ul>
                </WrappMPOneItem>
                <WrappMPOneItem
                    onMouseEnter={()=>{setIsActiveExp1(true)}}
                    onMouseLeave={()=>{setIsActiveExp1(false)}}
                >
                    <Circle isActive={isActiveExp1} />
                    <DashFromTheCircle/>
                    <SmallTitleMPOneItem> 04.2011 – 12.2020 </SmallTitleMPOneItem>
                    <MPText> Apteka „Avicenna” sp. j. w Tychach </MPText>
                </WrappMPOneItem>
                <WrappMPOneItem
                    onMouseEnter={()=>{setIsActiveExp2(true)}}
                    onMouseLeave={()=>{setIsActiveExp2(false)}}
                >
                    <Circle isActive={isActiveExp2} />
                    <DashFromTheCircle/>
                    <SmallTitleMPOneItem> 09.2011 – 06.2012 </SmallTitleMPOneItem>
                    <MPText> Apteka „Św. Anny” w Tychach (praca dodatkowa)</MPText>
                </WrappMPOneItem>
            </WrappMPEssence>
        </WrappMPSection>
    )
}

export default MPExperience