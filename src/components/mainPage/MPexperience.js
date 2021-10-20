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

const WrappMPExperience = styled.div`
  width: 100%;
  //border: 2px solid orangered;
  display: flex;
`

const TitleExperience = styled(TitleOfSection)`
    width: 100%;
  margin: 0 0 40px 0;
`
const WrappOneJob = styled(WrappMPOneItem)`
  position: relative;
`

const Yers = styled(SmallTitleMPOneItem)`
  
  `
const NameOfJob = styled.p`
    margin: 10px 0 0 0 `


const MPExperience = () => {

    const showDecorationLine = useMediaQuery({query: '(min-width: 1080px)' })

    return (
        <WrappMPExperience>
            { !showDecorationLine ?
                <WrappLineDecoration/> : null}
            <WrappMPEssence>
                <TitleExperience>
                    Doświadczenie zawodowe
                </TitleExperience>
                { showDecorationLine ?
                    <WrappLineDecoration/> : null}
                <WrappOneJob>
                    <Circle/>
                    <DashFromTheCircle/>
                    <Yers> 04.2011 – 12.2020 </Yers>
                    <NameOfJob> Apteka „Avicenna” sp. j. w Tychach </NameOfJob>
                </WrappOneJob>
                <WrappOneJob>
                    <Circle/>
                    <DashFromTheCircle/>
                    <Yers> 09.2011 – 06.2012 </Yers>
                    <NameOfJob> Apteka „Św. Anny” w Tychach (praca dodatkowa)</NameOfJob>
                </WrappOneJob>
            </WrappMPEssence>
        </WrappMPExperience>
    )
}

export default MPExperience