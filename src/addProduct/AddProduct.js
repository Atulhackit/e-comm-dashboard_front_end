import React, { useState } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
  });
  console.log(data);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  let userId = JSON.parse(localStorage.getItem("user"))?._id;

  const collectFormData = async (e) => {
    e.preventDefault();
    console.log(name, price, category, brand);

    if (!data?.name || !data?.price || !data?.category || !data?.brand) {
      setError(true);
      console.log(error);
      
      return false;
    }
    let result = await fetch("http://localhost:5000/addProduct", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("result", result);

    if (result) {
      navigate("/");
    }

    setBrand("");
    setCategory("");
    setName("");
    setPrice("");
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
          <form className="addProductFrom" autoComplete="off">
            <div>
              <input
                type="text"
                pattern="[a-z][A-Z]{3,10}"
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
              {error && !name && <span>Enter Product Name *</span>}
            </div>
            <div>
              <input
                type="text"
                pattern="{3,10}"
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
              {error && !price && <span>Enter Product Price *</span>}
            </div>
            <div>
              <input
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
              {error && !category && <span>Enter Product Category *</span>}
            </div>
            <div>
              <input
                type="text"
                value={data?.brand}
                onChange={(e) =>
                  setData({
                    ...data,
                    brand: e.target.value,
                  })
                }
                placeholder="Enter Prduct brand"
              />
              {error && !brand && <span>Enter Product Brand *</span>}
            </div>
            <button onClick={collectFormData} className="loginBtn">
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
