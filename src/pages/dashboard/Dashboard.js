import React, { Fragment, useEffect, useId, useState } from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "./Dashboard.scss";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [productList, setProductList] = useState([]);
  const [productId, setProductId] = useState("");
  let userId = JSON.parse(localStorage.getItem("user"))?._id;
  const ProductsApi = async () => {
    let products = await fetch("https://enchanting-jade-toga.cyclic.app/");
    products = await products.json();
    setProductList(products);
  };

  const deleteProduct = async (id) => {
    // console.log(id)
    console.log("another file changes");
    if (useId) {
      var result = await fetch(
        `https://enchanting-jade-toga.cyclic.app/deleteProduct/${id}`,
        {
          method: "delete",
        }
      );
      setProductId(id);
    }
    // result = await result.json()

    if (result) {
      alert(" Product is deleted");
    }
  };

  const SearchHandle = async (e) => {
    const key = e.target.value;
    console.log(key);
    if (key) {
      let result = await fetch(
        `https://enchanting-jade-toga.cyclic.app/search/${key}`
      );
      result = await result.json();
      if (result) {
        setProductList(result);
      }
    } else {
      ProductsApi();
    }
  };
  useEffect(() => {
    ProductsApi();
  }, [productId]);
  return (
    <section className="dashboardContainer">
      <Header />
      <section className="mainContainer">
        <header className="tableHeader">
          <p> Product List </p>
        <input
          type="search"
          placeholder="Search Product"
          className="SearchInput"
          onChange={(e) => SearchHandle(e)}
        />
        </header>
        <table className=" ProductTable">
          <tr className="tableHead">
            <th className="item">S. No</th>
            <th className="item">Product Name</th>
            <th className="item">Category</th>
            <th className="item">Brand</th>
            <th className="item">Price</th>
            <th className="item">Operation</th>
          </tr>
          {productList.length > 0 ? (
            productList.map((row, i) => {
              return (
                <tr className="tableBody" key={i}>
                  <td className="item">{i}.</td>
                  <td className="item">{row?.name}</td>
                  <td className="item">{row?.category}</td>
                  <td className="item">{row?.brand}</td>
                  <td className="item">${row?.price}</td>
                  <td className="item">
                    <button
                      onClick={() => (userId ? deleteProduct(row?._id) : null)}
                    >
                      delete
                    </button>
                    <Link to={userId ? `/updateProduct/${row?._id}` : "/ "}>
                      update
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <h3>No Product Found </h3>
          )}
        </table>
      </section>
      <Footer />
    </section>
  );
};

export default Dashboard;
