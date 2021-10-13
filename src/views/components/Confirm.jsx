import React from 'react'
import styled from 'styled-components'

const Confirm = ({willDelete, willCancel}) => {
    return (
        <StyledConfirm>
            <div className="boxConfirmation">
                <div className="title">
                    <span><h4>Delete Product ?</h4></span>
                </div>
                <div className="content">
                    <button onClick={willCancel}>Cancel</button>
                    <button onClick={willDelete}>Delete</button>
                </div>
            </div>
        </StyledConfirm>
    )
}

const StyledConfirm = styled.div`
    position: fixed;
    background-color: #00000078;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 33;

    .boxConfirmation{
        width: 30%;
        height: 18%;
        background-color: white;
        border-radius: 5px;

        .title{
            margin-top: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .content{
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;

            button{
                padding: 5px;
                margin: 10px;
                width: 200px;
                background-color: white;
                border: 1px solid gray;
                border-radius: 5px;

                :hover{
                    background-color: gray;
                    border: 1px solid gray;
                    color: white;
                }
            }
        }
    }
`

export default Confirm
