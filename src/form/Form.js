import React, { useEffect, useState } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { useNavigate } from "react-router-dom";

const getFieldError = (value) => {
  if (!value) return "field is required";
  return null;
};

const InputField = ({ name, placeholder, wasSubmitted ,type}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const errorMessage = getFieldError(value);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <div className="input dynamicClass">
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        // pattern="[a-z]{3,10}"
        // required
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? <span>Enter product {name}</span> : null}
    </div>
  );
};

const DummyForm = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    const formIsValid = Object.values(fieldValues).every(
      (value) => !getFieldError(value)
    );
    console.log("formData", fieldValues);
    setWasSubmitted(true);
    if (formIsValid) {
      e.currentTarget.reset();
      console.log(`Fast Form Submitted`, fieldValues);
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
          <form
            className="addProductFrom"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>
              <InputField name="name" placeholder="Enter Product Name" type="text"/>
            </div>
            <div>
              <InputField name="price" placeholder="Enter Product price" type="text"/>
            </div>
            <div>
              <InputField
                name="category"
                placeholder="Enter Product category"
              />
            </div>
            <div>
              <InputField name="brand" placeholder="Enter Product brand" type="text"/>
            </div>
            <button type="submit" 
            // onSubmit={handleSubmit} 
            className="loginBtn">
              Add Product
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DummyForm;
