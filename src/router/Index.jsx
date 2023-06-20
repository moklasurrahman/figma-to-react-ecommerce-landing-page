
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Erroe from './Erroer';
import Home from "../pages/home/Home";
import Footer from './../components/footer/Footer';





const Index = () => {
  return (
    <>

    <BrowserRouter>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Erroe/>}/>
        </Routes>
        <Footer/>
  </BrowserRouter>
    </>
  )
}

export default Index