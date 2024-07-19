import React from 'react';
import {BrowserRouter,Routes,Route,RouteProps } from "react-router-dom"
import { Dashboard} from "./pages/Dashboardpage/Dashboard.page";
import { Login } from './pages/Loginpage/Login.page';
import { Signup } from './pages/SignupPage/Signup.page';
import {Terms} from './pages/Termsandcon/Terms.page'
import { Verify } from './pages/VerifyPage/Verify.page';
import { FirstPage } from './pages/MainPage/First.page';
import {ProductDetails} from "./pages/ProductDetails/ProductDetails"
import { useParams } from 'react-router-dom';
import {ProductDetailsRoute} from "./pages/ProductDetailsRoute/ProductDetails.route"
import {Home} from "./pages/Homepage/Home.page"

  const App: React.FC = () => {

    const handleOpenModal = (productId: string) => {
      
      console.log('Opening modal for product:', productId);
    };
    return <BrowserRouter>
     <Routes>
      <Route path='/'element={<FirstPage/>}></Route>
      <Route path='/Dashboard' element={<Dashboard onOpenModal={handleOpenModal}/>}></Route>
      <Route path='/signup' element ={<Signup/>}></Route>
       <Route path='/signin' element={< Login/>}></Route>
       <Route path='/terms' element={< Terms/>}></Route>
       <Route path='/verify' element={< Verify/>}></Route>
       <Route path='/productdetails/:productid' element={<ProductDetailsRoute />} />
       <Route path='/home' element={<Home/>}></Route>


     </Routes>
    </BrowserRouter>
  };


export default App;
