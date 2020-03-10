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
import { inputUsername, inputPassword, loginUserParent, hideUnhide, KeepLogin } from "../redux/action";


class LoginOrtu extends Component {
    state = {
        char: false,
        spec: false,
        num: false,
        show: false,
        border: false
    }

    keyPressAct = (e) => {
        console.log(e.getModifierState('CapsLock'));
        if (e.key == 'Enter') {
            return this.onBtnLogin()
        }

    }

    onBtnRegister = () => {
        console.log(this.props.loginForm);
        this.props.loginUserParent(this.props.loginForm)
    }

    handleChange = (e) => {
        this.setState({ show: true })
        console.log(this.state.show);

        let pass = e.target.value
        let num = /[0-9]/
        let spec = /[!@#$%^&*;]/
        this.setState({
            num: num.test(pass),
            spec: spec.test(pass),
            char: pass.length > 7,
            border: (num.test(pass) && spec.test(pass) && (pass.length > 7))
        })
    }
    showReq = () => {
        this.setState({ show: true })
    }


    render() {

        console.log(this.props.user);
        console.log(this.props.loginForm);

        if (this.props.user.id) {
            this.state.redirect = true
            return <Redirect to="/profile" />
        }


        let { char, spec, num, show, border, same } = this.state
        if (this.state.redirect) {
            return <Redirect push to="/student" />;
        }

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
                                <input type="text" aria-label="First name" class="form-control" placeholder='  nama depan  ' />
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Belakang</span>
                                </div>
                                <input type="text" aria-label="Last name" class="form-control" placeholder='  nama belakang' />
                            </div>
                        </div>
                        <span className="input-group pt-2 pb-2">Alamat</span>
                        <div className='m-auto'>
                            <div class="input-group input-group-sm ">
                                <input type="text" aria-label="Address" class="form-control" placeholder='  alamat lengkap sesuai domisili  ' />
                            </div>
                        </div>
                        <span className="input-group mt-2 pb-2" onDragEnter>
                            Email
                    </span>
                        <div className='m-auto'>
                            <div class="input-group input-group-sm ">
                                <input type="text" aria-label="email" class="form-control" placeholder='  email aktif dan sesuai dengan email murid terdaftar  ' />
                            </div>
                        </div>

                        <Divider variant="middle" className='mt-5 mb-4 pr-2' />

                        <div className='h5 input-group pb-2'>Data Akun</div>
                        <span className="input-group m-auto pb-2">Username</span>
                        <div className=' m-auto '>
                            <div class="input-group input-group-sm ">
                                <input type="text" aria-label="username" class="form-control" placeholder='  masukkan username  ' />
                            </div>
                        </div>
                        <span className="input-group mt-2 pb-2" >
                            Password
                    <div className='ml-3'>
                                {
                                    show ? <a style={{ fontSize: '10pt', fontStyle: 'italic', color: 'red' }}>
                                        {
                                            char && spec && num ? <a style={{ color: 'green' }}>Mantap!</a>
                                                :
                                                <a style={{ color: 'red' }}>
                                                    Password harus&nbsp;
                                        {
                                                        char ? <a /> : <a style={{ color: 'red' }}> 8 karakter atau lebih,&nbsp;</a>
                                                    }
                                                    {
                                                        spec ? <a /> : <a style={{ color: 'red' }}>ada spesial karakter,&nbsp;
                                        </a>
                                                    }
                                                    {
                                                        num ? <a /> : <a style={{ color: 'red' }}> ada angka. </a>
                                                    }

                                                </a>
                                        }
                                    </a> : null
                                }
                            </div>
                        </span>
                        <div className='m-auto '>
                            <div class="input-group input-group-sm ">
                                <input type="text" aria-label="email" class="form-control" placeholder='  masukkan password' onChange={this.handleChange} />
                            </div>
                        </div>
                        <span className="input-group mt-2 pb-2" >
                            Ulangi Password
                    </span>
                        <div className='m-auto '>
                            <div class="input-group input-group-sm ">
                                <input type="text" aria-label="email" class="form-control" placeholder='  masukkan password' onChange />
                            </div>
                        </div>

                        <div class="mt-3 input-group-sm ">
                            <Checkbox
                                defaultChecked={false}
                                color="default"
                                size="small"
                                value="small"
                                inputProps={{ 'aria-label': 'checkbox with small size' }}
                            />
                            <span>Saya setuju dengan segala <a>persyaratan yang diajukan</a> </span>
                        </div><br />
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

const mapStatetoProps = ({ user, loginForm }) => {
    return { user, loginForm }
}

export default connect(mapStatetoProps/*ambil global state*/, { inputUsername, inputPassword, loginUserParent, hideUnhide, KeepLogin }/*isi global state (action creator)*/)(LoginOrtu);