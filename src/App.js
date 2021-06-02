import "./App.css";
import Nav from "./Components/Nav/Nav";
import  {Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import Products from "./Components/Products/Products";
import PrivateRoute from "./Components/PrivateRoute";
import Login from './Components/Login'
import {fakeAuth} from './Components/Login'

function App() {
  return (
 
   <div>
    <Nav/>
    <Route exact path="/" component={Home}/>
    <Route path="/category" component={Category}/>
    <Route path="/login" component={Login}/>
    <PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component = {Products} />
   </div>
 
  );
}

export default App;




