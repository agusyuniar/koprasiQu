import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, TextField } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import '../components/component.css';
import { Transition, animated } from 'react-spring/renderprops';
import { inputText, hideUnhide, checkUncheck, registerParent } from "../redux/action";


class RegisterForm extends Component {
    state = {
        char: false,
        special: false,
        num: false,
        show: false,
        border: false,
        warning: false
    }

    keyPressAct = (e) => {
        console.log(e.getModifierState('CapsLock'));
        if (e.key == 'Enter') {
            return this.onBtnLogin()
        }
    }

    onBtnRegister = () => {
        this.props.registerParent(this.props.regisForm)

        // if(this.props.regisForm.checked){
        //     console.log('regSuccess: ',this.props.regisForm.success);
        // }else{
        //     this.setState({warning:!this.state.warning})
        // }
    }

    handleChange = (e) => {
        this.setState({ show: true })
        console.log(this.state.show);
        let huruf = /[a-z]/
        let pass = e.target.value
        let num = /[0-9]/
        let special = /[!@#$%^&*;]/
        this.setState({
            huruf: huruf.test(pass),
            num: num.test(pass),
            special: special.test(pass),
            char: pass.length > 7,
            border: (huruf.test(pass) && num.test(pass) && special.test(pass) && pass.length > 7)
        })
    }
    showReq = () => {
        this.setState({ show: true })
    }

    levelPass = () => {
        if (this.state.char) {//pass sdh 8 dan sdh tampil
            if (this.state.char && this.state.special && this.state.num) {
                return <a className='text-success font-weight-bold font-italic'>password kuat!</a>
            } else if ((this.state.huruf && this.state.num) || (this.state.huruf && this.state.special) || (this.state.num && this.state.special)) {
                return <a className='text-warning font-weight-bold font-italic'>password standard</a>
            } else {
                return <a className='text-danger font-weight-bold font-italic'>password lemah!</a>
            }
        } else {
            return <a className='text-seondary font-italic'>password harus 8 karakter</a>
        }
    }

    render() {

        // console.log(this.props.user);
        console.log('warning = ', this.state.warning);
        console.log(this.props.regisForm);

        if (this.props.user.id) {
            this.state.redirect = true
            return <Redirect to="/profile" />
        }
        
        // if(this.props.regisForm.checked){
        //     this.state.warning=false
        // }else{
        //     this.state.warning=true
        // }

        if(this.props.regisForm.success){
            this.props.regisForm.success=false
            return (<Redirect push to="/registerSuccess"/>)
        }

        let { show } = this.state
        
        // if(this.props.regisForm.success){
        //     this.setState({redirect:true})
        //     this.props.regisForm.success=false
        //     return <Redirect push to="/registerSuccess"/>
        // }

        return (
            <div className='bg'>
                <div className='text-center container'>
                    <div
                        className='container shadow p-5  mb-5 col-8 '
                        style=
                        {{
                            borderRadius: '15px',
                            backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)'
                        }}
                    >
                        <h3><strong>Registrasi Akun Orangtua</strong></h3>
                        <div className='h5 input-group pt-5 pb-2'>Data Personal</div>
                        <span className="input-group pb-2">Nama Lengkap </span>
                        <div className='row m-auto'>
                            <div class="input-group input-group-sm ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Nama Depan </span>
                                </div>
                                <input
                                    value={this.props.regisForm.firstname}
                                    onChange={(val) => this.props.inputText('firstname', val.target.value)}
                                    type="text"
                                    class="form-control"
                                    placeholder='  nama depan  ' />
                                <div class="input-group-prepend">
                                    <span className="input-group-text" >Belakang</span>
                                </div>
                                <input value={this.props.regisForm.lastname} onChange={(val) => this.props.inputText('lastname', val.target.value)} type="text" aria-label="Last name" class="form-control" placeholder='  nama belakang' />
                            </div>
                        </div>
                        <span className="input-group pt-2 pb-2">Alamat</span>
                        <div className='m-auto'>
                            <div class="input-group input-group-sm ">
                                <input value={this.props.regisForm.alamat} onChange={(val) => this.props.inputText('alamat', val.target.value)} type="text" aria-label="Address" class="form-control" placeholder='  alamat lengkap sesuai domisili  ' />
                            </div>
                        </div>
                        <span className="input-group mt-2 pb-2" onDragEnter>
                            Email
                    </span>
                        <div className='m-auto'>
                            <div class="input-group input-group-sm ">
                                <input
                                    value={this.props.regisForm.email}
                                    onChange={(val) => this.props.inputText('email', val.target.value)}
                                    type="text" aria-label="email" class="form-control" placeholder='  email aktif dan sesuai dengan email murid terdaftar  ' />
                            </div>
                        </div>

                        <Divider variant="middle" className='mt-5 mb-4 pr-2' />

                        <div className='h5 input-group pb-2'>Data Akun</div>
                        <span className="input-group m-auto pb-2">Username</span>
                        <div className=' m-auto '>
                            <div class="input-group input-group-sm ">
                                <input
                                    value={this.props.regisForm.username}
                                    onChange={(val) => this.props.inputText('username', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='  masukkan username  ' />
                            </div>
                        </div>
                        <span className="input-group mt-2 pb-2" >
                            Password
                            <div className='ml-3'> {show ? this.levelPass() : null} </div>
                        </span>
                        <div className="input-group mb-3 input-group-sm">
                            <input
                                onKeyPress={(e) => this.keyPressAct(e)}
                                type={this.props.regisForm.hidePassword
                                    ? 'password' /*kondisi true*/
                                    : 'text' /*kondisi false*/
                                }
                                className="form-control float-left col-7 "
                                placeholder="Password"
                                value={this.props.regisForm.password}
                                onChange={(val) => this.props.inputText('password', val.target.value)}
                                onInputCapture={this.handleChange}
                            />

                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon1" >
                                    {/* <VisibilityIcon  /> */}
                                    {this.props.regisForm.hidePassword
                                        ? <VisibilityOffIcon onClick={this.props.hideUnhide} fontSize='small' /> /*kondisi true*/
                                        : <VisibilityIcon onClick={this.props.hideUnhide} fontSize='small' />/*kondisi false*/
                                    }
                                </span>
                            </div>
                        </div>
                        <span className="input-group mt-2 pb-2" >
                            Ulangi Password
                    </span>
                        <div className='m-auto '>
                            <div class="input-group input-group-sm ">
                                <input
                                    value={this.props.regisForm.confPassword}
                                    onChange={(val) => this.props.inputText('confPassword', val.target.value)}
                                    type="text"
                                    aria-label="email"
                                    class="form-control float-left col-7"
                                    placeholder='  masukkan password' />
                            </div>
                        </div>

                        <div class="mt-3 input-group-sm ">
                            <Checkbox
                                defaultChecked={this.props.regisForm.checked}
                                onClick={this.props.checkUncheck}
                                color="default"
                                size="small"
                                value="small"
                                inputProps={{ 'aria-label': 'checkbox with small size' }}
                            />
                            <span >Saya setuju dengan segala <a>persyaratan yang diajukan</a> </span>
                        </div>
                        {this.props.regisForm.checked ? null :
                        <a className='text-danger text-sm font-italic'>{this.props.regisForm.error}</a>
                        }
                        {/* {this.state.warning ? <a className='text-danger text-sm'>Silakan centang setuju untuk melanjutkan registrasi<br /></a> : <br />} */}
                        <br />
                        <Button
                            variant="outlined"
                            size='small'
                            color="primary"
                            className='shadow danger mt-3'
                            onClick={this.onBtnRegister}
                            type='submit'
                        >
                            Selesai
                        </Button>
                        <p className='mt-5 mb-5'>sudah ada akun? Silakan <Link to='/parent'>login disini</Link></p>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStatetoProps = ({ user, regisForm }) => {
    return { user, regisForm }
}

export default connect(mapStatetoProps/*ambil global state*/, { inputText, checkUncheck, registerParent, hideUnhide }/*isi global state (action creator)*/)(RegisterForm);