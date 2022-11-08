import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Login from './Login/Login';
import AddProduct from "./addProduct/AddProduct"
import UpdateProduct from "./updateProduct/UpdateProduct"
import About from "./about/About"
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
        </Routes>
        <Routes>
          <Route path='/addPorduct' element={<AddProduct/>} />
        </Routes>
        <Routes>
          <Route path='/updateProduct' element={<UpdateProduct/>} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About/>} />
        </Routes>
        <Routes>
          <Route path='/signUp' element={<Login/>} />
        </Routes>
    </Fragment>
  );
}

export default App;
