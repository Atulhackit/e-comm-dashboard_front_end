import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import SignUp from './Login/SignUp';
import Login from './Login/Login';
import AddProduct from "./addProduct/AddProduct"
import UpdateProduct from "./updateProduct/UpdateProduct"
import About from "./about/About"
import { Fragment } from 'react';
import PrivateComponent from './PrivateComponent';
import LogIn from './Login/Login';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element = {<PrivateComponent/>}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addPorduct' element={<AddProduct />} />
        <Route path='/updateProduct/:id' element={<UpdateProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        </Route>

        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </Fragment>
  );
}

export default App;
