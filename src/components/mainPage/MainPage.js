import React, {useState} from "react";
import styled from 'styled-components'

import MPEducation from "./MPEducation";
import MPExperience from "./MPexperience";
import MPNavigation from "./MPNavigation";
import MPSkills from "./MPSkills";

const mpNavigationArray = [
    {name: 'edukacja',
        id: "MPNavigation1",
        active: 'false',
    },
    {name: 'doświadczenie zawodowe',
        id: "MPNavigation2",
        active: 'false',
    },
    {name: 'umiejętności',
        id: "MPNavigation3",
        active: 'false',
    },
]

const WrappMainPage = styled.main`
  margin: 40px 40px 0 40px;
  padding-bottom: 40px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${props => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: limegreen solid 2px;
  @media (min-width: 992px) {
     }`


const MainPage = () => {

    const [whichIndex, setWhichIndex] = useState(0);

     const searchId = (id) => {
        const indexItem = mpNavigationArray.findIndex(task => task.id == id)
        setWhichIndex(indexItem)
    };


    return (
        <WrappMainPage>
            <MPNavigation mpNavigationArray={mpNavigationArray} searchId={searchId}/>
            { whichIndex == 0 ?
                <MPEducation/> : null}
            { whichIndex == 1 ?
                <MPExperience/> : null}
            { whichIndex == 2 ?
                <MPSkills/> : null}

        </WrappMainPage>
    )
}

export default MainPage