import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Table, Button } from "@material-ui/core";
import { Link } from "react-router-dom";


class ProfilePage extends Component {
    state = {}

    renderListAnak = () => {
        return this.props.user.anak.map((val,index)=>{
            console.log(val.nim);
            console.log(val.nama);
            console.log(val.alamat);
            return (
                <tbody className=''>
                    <tr  className='border-bottom'>
                        <td  className='pr-3 mt-4'>{index+1}</td>
                        <td >
                            <tr >
                                <td style={{paddingRight:'120px'}}>NIM</td>
                                <td>{val.nim}</td>
                            </tr>
                            <tr>
                                <td >Nama Siswa</td>
                                <td>{val.nama}</td>
                            </tr>
                            <tr>
                                <td >Alamat</td>
                                <td>{val.alamat}</td>
                            </tr>
                        </td>
                        <td style={{width:'15%'}}><Button>Detail</Button></td>
                    </tr>
                </tbody>


                // <tbody>
                // <tr>
                //     <td>{index+1}</td>
                // </tr>
                // <tr>
                //     <td>NIM</td>
                //     <td>{val.nim}</td>
                // </tr>
                // <tr>
                //     <td>Nama</td>
                //     <td>{val.nama}</td>
                // </tr>
                // <tr>
                //     <td>Alamat</td>
                //     <td>{val.alamat}</td>
                // </tr>
                // </tbody>
            )
        })
    }

    render() {

        console.log(localStorage.getItem('ptoken'));
        console.log(this.props.user.anak);

        // if(!this.props.user.id){
        //     return <Redirect to="/" />
        // }
        
        if (this.props.user.id) {
            
            if (localStorage.getItem('ptoken')) {
                return (
                    <div style={{ backgroundImage: "linear-gradient(to bottom, #fff 0%, #ebedee 100%)", paddingBottom:'100px'}}>
                        <h3 className='container pt-5 pb-2 border-bottom'>
                            profile page
                        </h3>

                        <div className='container p-3' style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                            {/* title */}
                            <PersonRoundedIcon type='outline' />{this.props.user.username}

                            <div className='container border rounded'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img src='' alt='profile pict' height='500px'/>
                                    </div>
                                    <div className='col-9'>

                                        {/* data pribadi */}
                                        <div className='h5 pt-3'>Data diri <a className='h6'> ubah</a></div> 
                                        <table>
                                            <tbody>
                                                <tr >
                                                    <td style={{paddingRight:'30px'}}>Username</td>
                                                    <td>{this.props.user.username} &nbsp; ( id : {this.props.user.id} )</td>
                                                </tr>
                                                <tr >
                                                    <td style={{paddingRight:'30px'}}>Nama</td>
                                                    <td>{this.props.user.firstname} &nbsp;{this.props.user.lastname}</td>
                                                </tr>
                                                <tr >
                                                    <td style={{paddingRight:'30px'}}>Email</td>
                                                    <td>{this.props.user.email}</td>
                                                </tr>
                                                <tr >
                                                    <td style={{paddingRight:'30px'}}>Alamat</td>
{
                                                    this.props.user.alamat
                                                    ?
                                                    <td>{this.props.user.alamat}</td>
                                                    :
                                                    <td>alamat tidak terdaftar (klik ubah untuk menambah alamat)</td>
                                                    }
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* data murid */}
                                        <div className= 'h5 mt-5 m-2 p-2 mb-5 border rounded'>
                                        <div className='pb-2 pl-1'>Data Anak</div> 
                                        <table style={{width:'100%'}}>
                                            {this.renderListAnak()}
                                        </table>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        } else {
            this.state.redirect = true
            return <Redirect to="/" />
        }
    }
}

const sambungin = ({ user }) => {
    return { user }
}
export default connect(sambungin)(ProfilePage);