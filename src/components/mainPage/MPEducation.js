import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import WrappLineDecoration from '../WrappLineDecoration';
import WrappMPOneItem from '../../styles/WrappMPOneItem';
import TitleOfSection from '../../styles/TitleOfSection';
import SmallTitleMPOneItem from '../../styles/SmallTitleMPOneItem';
import Circle from '../../styles/Circle';
import DashFromTheCircle from '../../styles/DashFromTheCircle';
import WrappMPEssence from '../../styles/WrappMPEssence';
import WrappMPSection from '../../styles/WrappMPSection';
import MPText from '../../styles/MPText';

const MPEducation = () => {
  const showDecorationLine = useMediaQuery({ query: '(min-width: 1080px)' });

  const [isActiveEdu1, setIsActiveEdu1] = useState(false);
  const [isActiveEdu2, setIsActiveEdu2] = useState(false);
  const [isActiveEdu3, setIsActiveEdu3] = useState(false);

  return (
    <WrappMPSection>
      {!showDecorationLine ? <WrappLineDecoration /> : null}
      <WrappMPEssence>
        <TitleOfSection>Edukacja</TitleOfSection>

        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveEdu3(true);
          }}
          onMouseLeave={() => {
            setIsActiveEdu3(false);
          }}
          presentTime
        >
          <Circle isActive={isActiveEdu3} presentTime />
          <DashFromTheCircle presentTime />
          {!showDecorationLine ? (
            <SmallTitleMPOneItem>2020 – 2021</SmallTitleMPOneItem>
          ) : null}

          <MPText presentTime> Front-end developer </MPText>
          <MPText presentTime>
            {' '}
            Nauka i rozwój umiejętności niezbędnych do pracy w zawodzie.
          </MPText>
          <MPText presentTime> Kursy i inne źródła wiedzy:</MPText>
          <ul>
            <li>WTF - co ten frontend</li>
            <li>Samuraj programowania</li>
          </ul>
          {showDecorationLine ? (
            <SmallTitleMPOneItem presentTime>2020 – 2021</SmallTitleMPOneItem>
          ) : null}
        </WrappMPOneItem>

        {showDecorationLine ? <WrappLineDecoration /> : null}

        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveEdu1(true);
          }}
          onMouseLeave={() => {
            setIsActiveEdu1(false);
          }}
        >
          <Circle isActive={isActiveEdu1} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011 </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText>
            {' '}
            Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w
            Sosnowcu
          </MPText>
          <Mgrfarm> mgr farmacji </Mgrfarm>
        </WrappMPOneItem>
        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveEdu2(true);
          }}
          onMouseLeave={() => {
            setIsActiveEdu2(false);
          }}
        >
          <Circle isActive={isActiveEdu2} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2002 – 2005 </SmallTitleMPOneItem>
          <MPText>
            {' '}
            I Liceum Ogólnokształcące im. Leona Kruczkowskiego w Tychach
          </MPText>
        </WrappMPOneItem>
      </WrappMPEssence>
    </WrappMPSection>
  );
};

export default MPEducation;

const Mgrfarm = styled(SmallTitleMPOneItem)`
  //border: #61dafb 2px solid;
  foont-weight: 700;
  margin-top: 10px;
  border-bottom: none;
  font-size: ${(props) => props.theme.fontSizes.fsB3};
  border-top: 1px solid ${(props) => props.theme.colors.colorPrimary};
`;
