import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Ortu from '../components/loginOrtu'
import Murid from '../components/loginMurid'

class LoginPage extends Component {

    render() {
        
        return (
            <div className=' m-auto text-center p-5' style={{ backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
                <div className='bg'>
                    <div className='container p-5'>
                        <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            <h3 className='p-5'><strong>Selamat, akun anda berhasil didaftarkan!</strong></h3>
                            <h5 className=''>Email verifikasi telah dikirimkan ke email anda.</h5>
                            <p className=''>Anda dapat <Link to='/paret'>login sekarang</Link></p>
                            <h6 className='p-5'>Verifikasi untuk mengoptimalkan akun anda</h6>
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
export default connect (sambungin) (LoginPage);