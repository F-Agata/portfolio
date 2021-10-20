import React from "react";
import styled from 'styled-components'

import WrappLineDecoration from "../WrappLineDecoration";

import TitleOfSection from "../../styles/TitleOfSection";
import WrappMPOneItem from "../../styles/WrappMPOneItem";
import SmallTitleMPOneItem from "../../styles/SmallTitleMPOneItem";

const WrappMPExperience = styled.div`
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

const TitleExperience = styled(TitleOfSection)`
    width: 100%;
  margin: 0 0 40px 0;
`

const WrappOneJob = styled(WrappMPOneItem)`  
`

const Yers = styled(SmallTitleMPOneItem)`
  span {
      text-align: right;
    color: olive;
    }  
  `
const NameOfJob = styled.p`
    margin: 10px 0 0 0 `


const MPExperience = () => {

    return (
        <WrappMPExperience>
            <TitleExperience>
                Doświadczenie zawodowe
            </TitleExperience>
            <WrappOneJob>
                <Yers> 04.2011 – 12.2020 </Yers>
                <NameOfJob> Apteka „Avicenna” sp. j. w Tychach </NameOfJob>
            </WrappOneJob>

            <WrappOneJob>
                <Yers> 09.2011 – 06.2012 </Yers>
                <NameOfJob> Apteka „Św. Anny” w Tychach (praca dodatkowa)</NameOfJob>
            </WrappOneJob>
        </WrappMPExperience>
    )
}

export default MPExperience