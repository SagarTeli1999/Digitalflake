//import Digital from  "./Digital";
//import Demo from  "./Demo";
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Product from "./Components/Product";
import Category from "./Components/Category";
import "./index.css";
const App =() =>{
//return <Digital/>
//return<Demo/>
return(
    <div>
<BrowserRouter>
<ul type='disc'>
     <li><Link to="/home">Home</Link></li>                
      <li><Link to="/category">Category</Link></li>
      <li><Link to="/product">Product</Link></li>
     </ul>

     <Routes>                                         
     <Route path="/home" Component={Home} />           
     <Route path="/category" Component={Category} />    
     <Route path="/product" Component={Product} />            
                                                              
 </Routes>                                    

</BrowserRouter>
    </div>

);

}

export default App;
