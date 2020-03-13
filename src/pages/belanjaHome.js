import React, { Component } from 'react';
import NavStore from "../components/navStore";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class BelanjaHome extends Component {
    state = {  }
    render() { 
        console.log(localStorage.getItem('ptoken'));
        if(!localStorage.getItem('ptoken')){
            
            return <Redirect to='/' >{alert('Untuk berbelanja silakan login terlebih dahulu')}</Redirect>
        }
        return (
            <div>
                <div className='sticky-top'>
                    <div className='navstore'>
                        <NavStore/>
                    </div>
                </div>
                <div className=' m-auto text-center p-5' style={{ backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
                <div className='bg2'>
                    <div className='container p-5'>
                        <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            
                            <h3 className='p-5'><strong>Selamat , akun anda telah terverifikasi</strong></h3>
                            <h5 className=''>Jika belum otomatis login silakan refresh halaman ini</h5>
                            <h5 className=''>atau masuk melalui halaman login</h5>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
 
const sambungin = ({user}) => {
    return {user}
}
export default connect (sambungin) (BelanjaHome);