import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const ProductView = () => {
    const [data, setdata] = useState()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setdata(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Id',
            selector: row => row.id,
        },
    ];
    return (
        <div>
            <Navbar/>
            <div className="container">
                <DataTable
                columns={columns}
                data={data}
                pagination
                />
            </div>
        </div>
    )
}

export default ProductView
