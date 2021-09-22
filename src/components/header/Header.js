import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import headerPhoto from '../../pictures/banner-01.png'

const WrappHeader = styled.header`
  margin: 100px 40px 0 40px;
  padding-bottom: 40px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${props => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    margin: 150px 40px 0 40px;
  }
`

const HeaderPartPhoto = styled.div`
max-width: 900px;
  @media (min-width: 992px) {
    flex-basis: 45%;
  }`

const WrappBigPhoto = styled.div`
  max-width: 900px;
  position: relative;
  `

const WrappSmallPhoto = styled.div`
  max-width: 900px;
  line-height: 0;
  position: relative;
  top: 0;
  bottom: 0px;
  left: 0px;
  right: 0;
  z-index: 1;
`
const PhotoMy = styled.img`
  width: 100%;
  `

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
  max-width: 900px;
  width: 500px;
  height: 500px;
  @media (min-width: 992px) {
    flex-basis: 55%;
  }
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
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, beatae, delectus distinctio ducimus eligendi enim explicabo ipsam odio quidem sapiente soluta suscipit tenetur, veritatis. Cum eos facere placeat rerum ullam!</p>
            </HeaderPartText>
        </WrappHeader>
    )
}

export default Header