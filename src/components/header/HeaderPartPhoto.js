import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import agata from '../../pictures/agata.png'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, z) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${z})`

const HeaderPartPhoto = () => {

     const [spring, setSpring] = useSpring(()=>({ xyz: [0, 0, 1], config: {mass: 10, tension: 200, friction:50}}))

  return (
    <WrappBigPhoto
        onMouseMove={({ clientX: x, clientY: y}) => (setSpring({ xyz: calc(x, y)}))}
        onMouseLeave={() => setSpring({ xyz: [0, 0, 1]})}
        style={ {transform: spring.xyz.interpolate(trans)}}
    >
      <ShadowDiv />
      <WrappSmallPhoto>
        <PhotoMy src={agata} alt={"I'm"} />
      </WrappSmallPhoto>
    </WrappBigPhoto>
  )
}

export default HeaderPartPhoto

const WrappBigPhoto = styled(animated.div)`
  max-width: 900px;
  position: relative;
  //border: yellowgreen 2px solid;
  cursor: pointer;
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
  //border: purple 2px solid;
`
const PhotoMy = styled.img`
  width: 100%;
  `

const ShadowDiv = styled.div`
  //border: yellow 2px solid;
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
