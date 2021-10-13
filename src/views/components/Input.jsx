import React from 'react';
import styled from 'styled-components';
import cam from '../../assets/cam.png';

const Input = (props) => {
  return (
    <StyledInput className={props.className}>
      <span>{props.title}</span>
      {props.type !== 'file' ? (
        props.disabled === true ? (
          <input type={props.type ? props.type : 'text'} name={props.name} defaultValue={props.defaultValue} disabled />
        ) : (
          <input
            type={props.type ? props.type : 'text'}
            name={props.name}
            defaultValue={props.defaultValue}
            onChange={(e) => props.onChange(e)}
          />
        )
      ) : (
        <>
          <label htmlFor="picture" className="imgPicker">
            <img src={props.src ? props.src : cam} alt="" />
          </label>
          <input
            id="picture"
            className="d-none"
            type="file"
            name="picture"
            onChange={(e) => props.onChange(e)}
            accept="image/jpeg, image/png"
          />
        </>
      )}
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  span {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 15px;
  }

  input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;

    :focus {
      outline: none;
    }
  }

  .imgPicker {
    width: 150px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 10px; */
    background-color: #ffffff;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export default Input;
