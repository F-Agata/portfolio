import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import WrappLineDecoration from '../WrappLineDecoration'

import WrappMPOneItem from '../../styles/WrappMPOneItem'
import TitleOfSection from '../../styles/TitleOfSection'
import SmallTitleMPOneItem from '../../styles/SmallTitleMPOneItem'
import Circle from '../../styles/Circle'
import DashFromTheCircle from '../../styles/DashFromTheCircle'
import WrappMPEssence from '../../styles/WrappMPEssence'
import WrappMPSection from '../../styles/WrappMPSection'
import MPText from '../../styles/MPText'

const MPSkills = () => {
  const showDecorationLine = useMediaQuery({ query: '(min-width: 1080px)' })

  return (
    <WrappMPSection>
      <WrappMPEssence>
        <TitleOfSection>
          Umiejętności
        </TitleOfSection>
        {showDecorationLine ? <WrappLineDecoration /> : null}
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011  </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011  </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011  </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011  </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011  </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText> Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w Sosnowcu</MPText>
        </WrappMPOneItem>
      </WrappMPEssence>
    </WrappMPSection>
  )
}

export default MPSkills
