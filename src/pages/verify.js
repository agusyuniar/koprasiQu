import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Ortu from '../components/loginOrtu'
import Murid from '../components/loginMurid'
import { verifyEmail } from "../redux/action/registerAction";

class LoginPage extends Component {

    componentDidMount(){
        // var val = queryString.parse(this.props.location.search)
        if(this.props.user.id==0){
        console.log(this.props.location.search);
        this.props.verifyEmail(this.props.location.search.slice(1))
    }
    // window.location.reload()
}

render() {
    console.log(this.props.user);
    if(!this.props.user.id){
        // window.location.assign('/verify')
    }
        
        return (
            <div className=' m-auto text-center p-5' style={{ backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
                <div className='bg2'>
                    <div className='container p-5'>
                        <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            
                            <h3 className='p-5'><strong>Selamat {this.props.user.firstname}, akun anda telah terverifikasi</strong></h3>
                            <h5 className=''>Jika belum login silakan refresh halaman</h5>
                            <h5 className=''>atau masuk melalui halaman <Link to='/parent'>login</Link></h5>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

const sambungin = ({user})=> {
    return {user}
}
export default connect (sambungin,{verifyEmail}) (LoginPage);