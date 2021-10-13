import React from 'react'
import styled from 'styled-components'
import loader from '../../assets/Loader.svg'

const Loader = () => {
    return (
        <StyledLoading>
            <img src={loader} alt="" />
        </StyledLoading>
    )
}

const StyledLoading = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #ffffff88;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export default Loader
