import React from 'react'
// import User from './User';
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer'
import Productlisting from './containers/ProductListing'
import Productdetail from './containers/ProductDetail'
import Cart from './components/cart'
import Reacteditor from './components/reacteditor'
import Test from './components/test'
import { BrowserRouter as Router ,Switch, Route,Routes} from 'react-router-dom'
import { Button } from 'reactstrap';
//import User from './user'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { productReducer } from './services/Reducers/productReducer';
import Videocallapp from './components/videocallapp'



function App() {

//let data = "nikhil patel"
// function parentAlert(data)
// {
//     console.log(data)
//     alert(data.name)
// }
    return (
        <div className="App">
             {/* <HeaderContainer /> */}
            <Router>
             <HeaderContainer /> 
           {/* <User data={{name:"nikhil", age:25}}/>  */}
           <Routes>
            <Route path="/product" exact element={<Productlisting/>} />
            <Route path="/products/:productId" exact element={<Productdetail/>} />
            <Route path="/cart" exact element={<Cart/>} />
            <Route path="/test" exact element={<Test />} />
           
            <Route path="/reacteditor" exact element={<Reacteditor />} />
            <Route path="/videocall" exact element={<Videocallapp />} />
            <Route>404 error</Route>
            </Routes>
            </Router>
            {/* <productListing />
            <HomeContainer /> */}
        {/* <h1>parent to child</h1>
        <User name={data}/> */}
        {/* <h1>child to perent</h1>
        <User alert={parentAlert} />
        </div> */}
        </div>
    )
}

export default App
