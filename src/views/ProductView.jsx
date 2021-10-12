import Navbar from './components/Navbar'
// import DataTable from 'react-data-table-component'

const ProductView = ({
    data
}) => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                {/* <DataTable
                columns={columns}
                data={data}
                pagination
                /> */}
            </div>
        </div>
    )
}

export default ProductView
