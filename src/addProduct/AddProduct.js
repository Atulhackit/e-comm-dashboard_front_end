import React, { useState } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { useNavigate } from "react-router-dom";

const Input=({name,placeholder,type})=>{
  const [value,setValue]= useState('')
  return (
    <div>
      <input
          name={name} 
          value={value}
          placeholder={placeholder}
          // pattern="[a-z][A-Z]"
          onChange={(e)=>setValue(e.target.value)}
          required
      />
      {  !value && <span> Please Enter {name}</span>}
    </div>
  )
}
const AddProduct = () => {
  // const [data, setData]=useState({
  //   name:"",
  //   brand:"",
  //   price:"",
  //   category:""
  // })
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [brand, setBrand] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  let userId = JSON.parse(localStorage.getItem("user"))?._id;

  const collectFormData = async (e) => {
    e.preventDefault();
    const formData= new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData.entries())
    console.log("formValuess")

    if (!formValues?.name || !formValues?.price || !formValues?.category || !formValues?.brand) {
      setError(true);
      console.log(error);

      return false; 
    }
    let result = await fetch("http://localhost:5000/addProduct", {
      method: "post",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("result", result);

    if (result) {
      navigate("/");
    }

  };

  return (
    <div>
      <Header />
      <div className="addProductContainer">
        <div
          className="mainContainer"
          style={{ background: "none", color: "black" }}
        >
          <header className="loginHead">
            <p> Add Product</p>
          </header>
          <form className="addProductFrom" autoComplete="off" onSubmit={collectFormData}>
            <div>
              <Input name="name" type="text" placeholder="Enter Product Name" />
              {/* <input
                type="text"
                pattern="[a-z][A-Z][0-9]"
                required
                value={data?.name}
                onChange={(e) => {
                  setData({
                    ...data,
                    name: e.target.value,
                  });
                }}
                placeholder="Enter Product Name"
              />
              {error && !name && <span>Enter Product Name *</span>} */}
            </div>
            <div>
            <Input name="price" type="text" placeholder="Enter Product price" />
              {/* <input
                type="text"
                pattern="[0,9]"
                required
                value={data?.price}
                onChange={(e) =>
                  setData({
                    ...data,
                    price: e.target.value,
                  })
                }
                placeholder="Enter Product Price"
              />
              {error && !price && <span>Enter Product Price *</span>} */}
            </div>
            <div>
            <Input name="category" type="text" placeholder="Enter Product Category" />
              {/* <input
                type="text"
                value={data?.category}
                onChange={(e) =>
                  setData({
                    ...data,
                    category: e.target.value,
                  })
                }
                placeholder="Enter Product Category"
              />
              {error && !category && <span>Enter Product Category *</span>} */}
            </div>
            <div>
            <Input name="brand" type="text" placeholder="Enter Product Brand" />
              {/* <input
                type="text"
                value={data?.brand}
                pattern="[a-z][A-Z][0-9]"
                onChange={(e) =>
                  setData({
                    ...data,
                    brand: e.target.value,
                  })
                }
                placeholder="Enter Prduct brand"
              />
              {error && !brand && <span>Enter Product Brand *</span>} */}
            </div>
            <button  className="loginBtn">
              Add Product
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
