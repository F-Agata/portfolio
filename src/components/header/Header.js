import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const WrappHeader = styled.header`
  margin-top: 200px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${props => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;`

const HeaderPartPhoto = styled.div`
border: crimson 2px solid;
max-width: 900px;`

const HeaderPartText = styled.div`
  border: crimson 2px solid;
  max-width: 900px;`

const Header = () => {

    return (
        <WrappHeader>
            <HeaderPartPhoto>

            </HeaderPartPhoto>
            <HeaderPartText>

            </HeaderPartText>
        </WrappHeader>
    )
}

export default Header