import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Axios from 'axios';
/*________________page_comp________________*/
import Homepage from './pages/home';
import Profile from "./pages/profile";
import Register from './pages/register';
import RegSuccess from './pages/regSuccess';
import verify from './pages/verify';
import detailMurid from './pages/detailMurid';
import BelanjaHome from './pages/belanjaHome';
import detailProduct from "./pages/detailProduct";
import AdminPage from './pages/admin';
import cart from './pages/cart';
import checkOut from './pages/checkOut';

/*________________only_comp________________*/
import Loginpage from './pages/login'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Ortu from './components/loginOrtu'
import Murid from './components/loginMurid'
import Cobacoba from './components/tes'

import { KeepLogin, getCartbyParent } from "./redux/action";


class App extends Component {
  componentDidMount() {
    var token = localStorage.getItem('ptoken')
    console.log(token)
    this.props.KeepLogin(token)   
  }
  
  render(){
    
    this.props.getCartbyParent(this.props.user.id)
    return(
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/login' component={Loginpage} />      
          <Route path='/parent' component={Ortu} />      
          <Route path='/student' component={Murid} />      
          <Route path='/profile' component={Profile} />      
          <Route path='/detailMurid' component={detailMurid} />      
          <Route path='/register' component={Register} />      
          <Route path='/registerSuccess' component={RegSuccess}/>      
          <Route path='/verify' component={verify}/>      
          <Route path='/kopshop' component={BelanjaHome}/>      
          <Route path='/details' component={detailProduct}/>      
          <Route path='/admin' component={AdminPage}/>      
          <Route path='/mycart' component={cart}/>      
          <Route path='/checkout' component={checkOut}/>      
          
          {/* <Route path='/detail' component={MovieDetail} />
          <Route path='/signup' component={Register} />      
          <Route path='/admin' component={Admin} />      
          <Route path='/user' component={User} />      
          <Route path='/reserve' component={Reserve} />      
          <Route path='/checkout' component={CheckOut} />      
          <Route path='/trdetail' component={History} />      
        <Route path='*' component={TidakKetemu} />       */}
        <Route path='/tes' component={Cobacoba} />      
        </Switch>
        <Footer/>
        {/* <Futer/> */}
      </div>
    )
  }
}
const sambungin=({user})=>{
  return {user}
}
export default connect (sambungin, {KeepLogin,getCartbyParent}) (App);
