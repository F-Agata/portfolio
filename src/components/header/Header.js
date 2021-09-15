import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import headerPhoto from '../../pictures/banner-01.png'

const WrappHeader = styled.header`
  margin: 150px 40px 0 40px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${props => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;`

const HeaderPartPhoto = styled.div`
//border: crimson 2px solid;
max-width: 900px;`

const WrappBigPhoto = styled.div`
  max-width: 900px;
  position: relative;
  `

const WrappSmallPhoto = styled.div`
  max-width: 900px;
  //border: #61dafb 2px solid;
  position: relative;
  top: 0;
  bottom: -10px;
  left: 0px;
  right: 0;
  z-index: 1;
`
const PhotoMy = styled.img`
  width: 100%;`

const ShadowDiv = styled.div`
  max-width: 900px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 20%;
  z-index: 0;
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  background: ${props => props.theme.gradients.gradientBox};
  border-radius: 5px;
`



const HeaderPartText = styled.div`
  margin: 20px;
  border: crimson 2px solid;
  background: ${props => props.theme.gradients.gradientBox};
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  max-width: 900px;
  //background-color: #e2e8ec;
width: 500px;
height: 500px;
  
`

const Header = () => {

    return (
        <WrappHeader>
            <HeaderPartPhoto>
             <WrappBigPhoto>
                 <ShadowDiv/>
                 <WrappSmallPhoto>
                     <PhotoMy src={headerPhoto} alt={"I'm"}/>
                 </WrappSmallPhoto>



             </WrappBigPhoto>
            </HeaderPartPhoto>
            <HeaderPartText>

            </HeaderPartText>
        </WrappHeader>
    )
}

export default Header