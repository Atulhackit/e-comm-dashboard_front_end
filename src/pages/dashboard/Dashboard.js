import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import "./Dashboard.scss"
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [productList, setProductList] = useState([])
  const [productId,setProductId] = useState('')
  const ProductsApi = async () => {
    let products = await fetch("https://enchanting-jade-toga.cyclic.app/")
    products = await products.json()
    setProductList(products)
  }

  const deleteProduct = async (id) => {
    // console.log(id)
    console.log("another file changes")
    const result = await fetch(`https://enchanting-jade-toga.cyclic.app/deleteProduct/${id}`,
      {
        method: "delete"
      })
      setProductId(id)
    // result = await result.json()

    if (result) {
      alert(' Product is deleted')
    }
  }

  const SearchHandle = async(e)=>{
    const key = e.target.value
    console.log(key)
    if(key){
      let result = await fetch(`https://enchanting-jade-toga.cyclic.app/search/${key}`)
      result = await result.json()
      if(result){
        setProductList(result)
      }
    }else{
      ProductsApi()
    }
    
  }
  useEffect(() => {
    ProductsApi()
  },[productId])
  return (
    <div className='dashboardContainer'>
      <Header />
      <section className='mainContainer'>
        <div className='heading'>
          <p > Product List </p>
        </div>
        <input type="search" placeholder="Search Product"  className="SearchInput" onChange={(e)=>SearchHandle(e)}/>
        <div className=' ProductTable'>
          <ul className='tableHead'>
            <li className='item'>S. No</li>
            <li className='item'>Product Name</li>
            <li className='item'>Category</li>
            <li className='item'>Brand</li>
            <li className='item'>Price</li>
            <li className='item'>Operation</li>
          </ul>
          {productList.length>0 ?
             productList.map((row, i) => {
              return (
                <ul className='tableBody' key={i}>
                  <li className='item'>{i}.</li>
                  <li className='item'>{row?.name}</li>
                  <li className='item'>{row?.category}</li>
                  <li className='item'>{row?.brand}</li>
                  <li className='item'>${row?.price}</li>
                  <li className='item'>
                    <button onClick={() => deleteProduct(row?._id)}>delete</button>
                    <Link to= {`/updateProduct/${row?._id}`} >update</Link>
                  </li>
                  
                </ul>
              )
            })
            :(<h3>No Product Found </h3>)
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Dashboard