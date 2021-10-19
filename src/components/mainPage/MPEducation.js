import React from "react";
import styled from 'styled-components'

import WrappMPOneItem from "../../styles/WrappMPOneItem";
import TitleOfSection from "../../styles/TitleOfSection";
import SmallTitleMPOneItem from "../../styles/SmallTitleMPOneItem";

const WrappMPEducation = styled.div`
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

const TitleEducation = styled(TitleOfSection)`
    width: 100%;
  margin: 0 0 40px 0;
`

const WrappOneSchool = styled(WrappMPOneItem)`  
`

const Yers = styled(SmallTitleMPOneItem)`
  //border: #61dafb 2px solid;
  margin-top:  ${props => props.mgrfarm ? '10px' : '0px'};;
  `
const NameOfSchool = styled.p`
    margin: 10px 0 0 0 ;
`

const MPEducation = () => {

    return (
        <WrappMPEducation>
            <TitleEducation>
                Edukacja
            </TitleEducation>
            <WrappOneSchool>
                <Yers> 2005 – 2011  </Yers>
                <Yers mgrfarm> mgr farmacji  </Yers>
                <NameOfSchool> Śląski Uniwersytet Medyczny w Katowicach </NameOfSchool>
                <NameOfSchool> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</NameOfSchool>
            </WrappOneSchool>
            <WrappOneSchool>
                <Yers> 2002 – 2005 </Yers>
                <NameOfSchool> I Liceum Ogólnokształcące im. Leona Kruczkowskiego w Tychach</NameOfSchool>
            </WrappOneSchool>
        </WrappMPEducation>
    )
}

export default MPEducation