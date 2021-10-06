import React from "react";
import styled from 'styled-components'

import MPNavigation from "./MPNavigation";


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

    return (
        <WrappMainPage>
            <MPNavigation/>
        </WrappMainPage>
    )
}

export default MainPage