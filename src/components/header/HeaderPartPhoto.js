import React from 'react'
import styled from 'styled-components';

import headerPhoto from '../../pictures/banner-01.png'

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

const HeaderPartPhoto = () => {

    return (
                <WrappBigPhoto>
                    <ShadowDiv/>
                    <WrappSmallPhoto>
                        <PhotoMy src={headerPhoto} alt={"I'm"}/>
                    </WrappSmallPhoto>
                </WrappBigPhoto>
    )
}

export default HeaderPartPhoto