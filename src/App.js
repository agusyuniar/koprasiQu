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
import AdminPage from './pages/admin';

/*________________only_comp________________*/
import Loginpage from './pages/login'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Ortu from './components/loginOrtu'
import Murid from './components/loginMurid'
import Cobacoba from './components/tes'

import { KeepLogin } from "./redux/action";


class App extends Component {
  // componentDidMount(){    
  //   let username = localStorage.getItem('username')
  //   if(username){
  //       console.log(username)
  //     Axios.get(`http://localhost:2000/users?username=${username}`)
  //     .then((res)=>{
  //       console.log(res)
  //       this.props.login(res.data[0])
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     })
  //   }

  //   // this.props.keepLogin()
  // }

  componentDidMount() {
    var token = localStorage.getItem('ptoken')
    console.log(token)
    this.props.KeepLogin(token)   
  }

  render(){
    return(
      <div>
        {/* <Iklan/> */}
        {/* <NavbarComp /> */}
        {/* <NavbarHom /> */}
        {/* <Shortcut /> */}
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
          <Route path='/admin' component={AdminPage}/>      
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

export default connect (null, {KeepLogin}) (App);
