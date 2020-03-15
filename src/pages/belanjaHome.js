import React, { Component } from 'react';
import NavStore from "../components/navStore";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import CardProduct from "../components/CardProduct";

import { getProduct } from "../redux/action";


class BelanjaHome extends Component {
    state = {  }

    // componentDidMount(){
    //     return this.props.getProduct
    // }

    render() { 
        console.log(localStorage.getItem('ptoken'));
        if(!localStorage.getItem('ptoken')){
            
            return <Redirect to='/login' >{alert('Untuk berbelanja silakan login terlebih dahulu')}</Redirect>
        }

        console.log();
        
        return (
            <div  style={{ backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
            {/* --------------menu--------------- */}
                <div className='sticky-top'>
                    <div className='navstore'>
                        <NavStore/>
                    </div>
                </div>
                <div className='container p-2'>
                    <div className='pl-5 pr-5 row text-center' style={{justifyContent:'center'}}>
                        <div style={{fontSize:'14pt', margin:5}}>
                            Select category : 
                        </div>
                        <a className='m-2 tebal'>
                            asd
                        </a>
                        <Divider style={{ height: 20, margin:10}} orientation="vertical" />
                        <a className='m-2 tebal'>
                            asd
                        </a>
                        <Divider style={{ height: 20, margin:10}} orientation="vertical" />
                        <a className='m-2 tebal'>
                            asd
                        </a>
                        <Divider style={{ height: 20, margin:10}} orientation="vertical" />
                        <a className='m-2 tebal'>
                            asd
                        </a>
                    </div>
                </div>
            {/* --------------end menu--------------- */}
                <div className=' text-center'>
                <div className=''>
                    <div className='container'>
                        <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .7)' }}>
                            <CardProduct/>
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
export default connect (sambungin,{getProduct}) (BelanjaHome);