import styles from '../styles/Home.module.css'
import { inquirySelectors, getProduct } from "../components/inquiry.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

export default function template() {

    const dispatch = useDispatch()

    /* Baru */
    // const response = useSelector(state => state.product)
    // console.log(response.product.DATA)
    // const products = response.product.DATA
    
    const [products, setProduct] = useState([])
    
    const response = useSelector(state => state.product)
    // console.log(response.product.DATA)
    useEffect(()=> {
        dispatch(getProduct())
        setProduct(response.product.DATA)
    }, [dispatch, response])
    console.log(products)
    /* Lama */

    // const { method, uid, pin, idpel1, kode_produk } = useSelector((state) => state.inquiry)

    // const kosong = 'Kosong'
    // const [input, setInput] = useState({
    //     uid: '', 
    //     pin: '', 
    //     idpel1: '', 
    //     kode_produk: ''
    // })

    // const handleChange = (event) => {
    //     let nameOfInput  = event.target.name
    //     let valueOfInput = event.target.value

    //     setInput({...input, [nameOfInput]: valueOfInput})
    // }

    // const inputInquiry = (e) => {
    //     e.preventDefault()

    //     const { uid, pin, idpel1, kode_produk } = input
    //     dispatch(updateInquiry({
    //         uid, pin, idpel1, kode_produk
    //     }))
    // }

    return (
        <>
            <div className={styles.container}>
                <div className='grid grid-cols-2 gap-4 mt-10'>
                    {/* <div>
                        <form onSubmit={inputInquiry}  action="#" method="POST" className="bg-sky-500">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="px-4 py-5 sm:p-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        UID
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        onChange={handleChange}
                                        name="uid"
                                        value={input.uid}
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="px-4 py-5 sm:p-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        PIN
                                    </label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="pin"
                                        value={input.pin}
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="px-4 py-5 sm:p-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        ID Pelanggan
                                    </label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="idpel1"
                                        value={input.idpel1}
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="px-4 py-5 sm:p-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Kode Produk
                                    </label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="kode_produk"
                                        value={input.kode_produk}
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <button className='rounded-full text-white bg-green-500 m-5 px-3 py-1'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Method</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{method == '' ? kosong : method}</dd>
                                    </div>
                                </dl>
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">UID</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{uid == '' ? kosong : uid}</dd>
                                    </div>
                                </dl>
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Pin</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{pin == '' ? kosong : pin}</dd>
                                    </div>
                                </dl>
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Id Pelanggan 1</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{idpel1 == '' ? kosong : idpel1}</dd>
                                    </div>
                                </dl>
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Kode Produk</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{kode_produk == '' ? kosong : kode_produk}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div> */}
                    <div>
                        <h1>TEST</h1>
                        {/* {response.product.DATA} */}
                        {response.product.DATA}
                    </div>
                </div>
            </div>
        </>
    )
}