import Navbar from './components/Navbar';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import {useState} from 'react';
import Modal from './components/Modal';
import Loader from './components/Loader';
import Confirm from '../views/components/Confirm'

const ProductView = ({
  data,
  willDelete,
  handleForm,
  handleAddProduct,
  handleFormUpdate,
  showProduct,
  willRestore,
  handleUpdateProduct,
  switchTrash,
  loading,
}) => {
  const [modal, setmodal] = useState(false);
  const [modalUpdate, setmodalUpdate] = useState(false);
  const [confirm, setconfirm] = useState(0)

  const columns = [
    {
      name: 'id',
      selector: (row) => row.id,
      sortable: true,
      omit: true
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'qty',
      selector: (row) => row.qty,
      sortable: true,
    },
    {
      name: 'Expired At',
      selector: (row) => row.expiredAt,
      sortable: true,
    },
    {
      name: 'Picture',
      selector: (row) => (
        <ImgProduct>
          <img src={row.picture} alt="" />
        </ImgProduct>
      ),
    },
    {
      name: 'Is Active',
      selector: (row) => `${row.isActive}`,
    },
    {
      name: 'Action',
      selector: (row) => (
        row.isActive === true ?
        <ButtonAction>
          <button
            className="buttonUpdate"
            onClick={() => {
              setmodalUpdate(true);
              showProduct(row.id);
            }}
          >
            Update
          </button>
          <button className="buttonDelete" onClick={() => setconfirm(row.id)}>
            Delete
          </button>
        </ButtonAction>
        :
        <ButtonAction>
          <button
            className="buttonUpdate"
            onClick={() => willRestore(row.id)}
          >
            Restore
          </button>
        </ButtonAction>
      ),
    },
  ];

  const customTableStyles = {
    headCells: {
      style: {
        backgroundColor: '#212529',
        color: 'white',
        width: '210px',
      },
    },
  };

  return (
    <div>
      {loading === true &&
      <Loader />
      }
      {
        confirm !== 0 &&
        <Confirm
        willCancel={() => setconfirm(0)}
        willDelete={() => {
          willDelete(confirm)
          setconfirm(0)
        }}
        />
      }
      {modal === true && (
        <Modal
          handleForm={(e) => handleForm(e)}
          willCancel={() => setmodal(false)}
          handleAddProduct={() => {
            handleAddProduct()
            setmodal(false)
          }}
          title="Add new Product"
        />
      )}
      {modalUpdate === true && loading === false && (
        <Modal
          handleFormUpdate={(e) => handleFormUpdate(e)}
          willCancel={() => setmodalUpdate(false)}
          handleUpdateProduct={(id) => {
            handleUpdateProduct(id)
            setmodalUpdate(false)
          }}
          title="Update Product"
          modalForUpdate={true}
        />
      )}
      <Navbar />
      <TableWrapper className="container mt-5">
        <ButtonAdd onClick={() => setmodal(true)}>Add Product</ButtonAdd>
        <ButtonAdd onClick={switchTrash}>
          {data.length > 0 && data[0].isActive === true ?
          'Switch Product'
        :
          'Switch Trash'
        }
          </ButtonAdd>
        {data.length > 0 ? (
          <DataTable
            columns={columns}
            data={data}
            pagination
            fixedHeader={true}
            fixedHeaderScrollHeight="70vh"
            striped={true}
            customStyles={customTableStyles}
            defaultSortFieldId={1}
            // progressPending={true}
          />
        ) : (
          <DataTable progressPending={true} />
        )}
      </TableWrapper>
    </div>
  );
};

const ImgProduct = styled.div`
  width: 70px;
  height: 70px;
  padding: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ButtonAction = styled.div`
  width: 180px;
  display: flex;

  .buttonDelete,
  .buttonUpdate {
    width: 90px;
    margin: 5px;
    padding: 5px;
    border: 1px solid #212529;
    border-radius: 5px;
    background-color: white;

    :hover {
      background-color: gray;
      color: white;
      border: 1px solid gray;
    }
  }
`;

const TableWrapper = styled.div`
  height: 80vh;
`;

const ButtonAdd = styled.button`
  margin-bottom: 10px;
  border: 1px solid #212529;
  background-color: white;
  border-radius: 3px;
  padding: 5px;
  margin-right: 5px;
  :hover {
    background-color: gray;
    color: white;
    border: 1px solid gray;
  }
`;

export default ProductView;
