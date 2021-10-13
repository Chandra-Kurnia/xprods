import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import {useState} from 'react';
import {useSelector} from 'react-redux';
// import imageToBase64 from 'image-to-base64'

const Modal = ({
  willCancel,
  handleForm,
  handleAddProduct,
  handleUpdateProduct,
  handleFormUpdate,
  title,
  modalForUpdate,
}) => {
  const {product} = useSelector((state) => state.products);
  const [baseImage, setbaseImage] = useState();

  const handleImg = (e) => {
    setbaseImage(URL.createObjectURL(e.target.files[0]));
    const reader = new FileReader();
    reader.onloadend = function () {
      setbaseImage(reader.result);
      if (modalForUpdate === true) {
        handleFormUpdate({
          target: {
            name: 'picture',
            value: reader.result,
          },
        });
      } else {
        handleForm({
          target: {
            name: 'picture',
            value: reader.result,
          },
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <ModalWrapper>
      <div className="modalBox">
        <div className="modalTitle">
          <span>{title}</span>
        </div>
        {modalForUpdate === true ? (
          <div className="modalContent">
            <Input title="Id" name="id" defaultValue={product.id} disabled={true} />
            <Input title="Name" name="name" onChange={(e) => handleFormUpdate(e)} defaultValue={product.name} />
            <Input title="QTY" name="qty" onChange={(e) => handleFormUpdate(e)} defaultValue={product.qty} />
            <Input
              title="Expired At"
              name="expiredAt"
              onChange={(e) => handleFormUpdate(e)}
              type="date"
              defaultValue={product.expiredAt}
            />
            <Input
              title="Picture"
              onChange={(e) => handleImg(e)}
              type="file"
              src={baseImage ? baseImage : product.picture}
            />
          </div>
        ) : (
          <div className="modalContent">
            <Input title="Id" name="id" onChange={(e) => handleForm(e)} />
            <Input title="Name" name="name" onChange={(e) => handleForm(e)} />
            <Input title="QTY" name="qty" onChange={(e) => handleForm(e)} />
            <Input title="Expired At" name="expiredAt" onChange={(e) => handleForm(e)} type="date" />
            <Input title="Picture" onChange={(e) => handleImg(e)} type="file" src={baseImage} />
          </div>
        )}
        <div className="modalFooter">
          <button className="btnCancel" onClick={() => willCancel()}>
            Cancel
          </button>
          {modalForUpdate === true ? (
            <button className="btnAdd" onClick={() => handleUpdateProduct(product.id)}>
              Update
            </button>
          ) : (
            <button className="btnAdd" onClick={handleAddProduct}>
              Add
            </button>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  background-color: #0000009b;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalBox {
    background-color: white;
    width: 90%;
    height: 93%;
    border-radius: 10px;

    @media (min-width: 768px) {
      width: 60%;
    }

    @media (min-width: 992px) {
      width: 40%;
    }

    .modalTitle {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      border-bottom: 2px solid gray;
      padding: 20px 0px 20px 0px;
    }

    .modalContent {
      width: 100%;
      padding: 20px 50px 20px 50px;
    }

    .modalFooter {
      text-align: right;
      padding: 10px 50px 10px 0px;
      border-top: 2px solid gray;

      button {
        width: 100px;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        background-color: white;
        border: 1px solid gray;

        :hover {
          background-color: gray;
          color: white;
        }
      }
    }
  }
`;

export default Modal;
