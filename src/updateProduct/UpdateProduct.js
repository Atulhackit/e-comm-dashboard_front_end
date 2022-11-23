import React ,{ Fragment ,useEffect,useState} from 'react'
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
  const [name, setName] = useState('')
  const [price , setPrice] = useState("")
  const [category , setCategory] = useState("")
  const [brand , setBrand] = useState("")
  const navigate= useNavigate()
  const [error, setError] = useState(false)
  let userId = JSON.parse(localStorage.getItem("user"))?._id
  const productId = useParams()?.id

  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails = async()=>{
    let result = await fetch(`http://localhost:5000/product/${productId}`)
    result = await result.json()
    // console.log(result)

    setBrand(result?.brand)
    setCategory(result?.category)
    setName(result?.name)
    setPrice(result?.price)
  }

  const updateFormData =async (e)=>{
    e.preventDefault()
    let result = await fetch(`http://localhost:5000/product/${productId}`,{
      method:"Put",
      body:JSON.stringify({name,price,category,brand }),
      headers:{
        "Content-Type": "application/json"
      }
    })
    result = await result.json()
    // console.log(result?.modifiedCount)
    if(result){
      navigate("/")
    }
    
  }
  return (
    <Fragment>
      <Header/>
      <div className='addProductContainer'>
      <div className='mainContainer' style={{background:"none", color:"black"}}>
        <header className='loginHead'>
          <p> Update Product</p>
        </header>
        <form className='addProductFrom' autoComplete="off">
          <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
          { error && !name && <span>Enter Product Name *</span>}
          </div>
          <div>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price"/>
          {error && !price && <span>Enter Product Price *</span>}
          </div>
          <div>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
          {error && !category && <span>Enter Product Category *</span>}
          </div>
          <div>
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter Prduct brand"/>
          {error && !brand && <span>Enter Product Brand *</span>}
          </div>
          <button onClick={(e)=>updateFormData(e)} className='loginBtn'>Update Product</button>

        </form>
      </div>
    </div>
        <Footer/>
    </Fragment>
  )
}

export default UpdateProduct