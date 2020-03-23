import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './component.css';
import { Transition, animated } from 'react-spring/renderprops'
import { inputNim, inputPassword, hideUnhide, loginStudent } from "../redux/action";

class LoginOrtu extends Component {
    state = {
        redirect: false,
        index: 0
    }

    btnAct = () => {
        this.setState({ redirect: true });
    }

    onBtnLoginStudent=()=>{
        console.log(this.props.loginForm);
        this.props.loginStudent(this.props.loginForm)
        console.log(this.props.user);
        
    }

    keyPressAct = (e) => {
        console.log(e.getModifierState('CapsLock'));
        if (e.key == 'Enter') {
            return this.onBtnLoginStudent()
        }

    }

    render() {
        console.log(this.props.loginForm);
        
        const pages = [
            style => (
                <animated.div style={{ ...style }}>
                    <img src={require('../img/loginpict.png')} alt='loginIMG' className='gambarlogin ' />
                </animated.div>
            )
        ]

        if (this.props.user.nim) {
            this.state.redirect = true
            return <Redirect to="/profileMurid" />
        }

        if (this.state.redirect) {
            return <Redirect push to="/parent" />;
        }
        return (
            <div className='text-center container '>
                <div
                    className='container shadow p-3  mb-5 col-8'
                    style=
                    {
                        {
                            borderRadius: '15px',
                            backgroundImage: 'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)'
                        }
                    }
                >
                    <h3><strong>Login sebagai Murid</strong></h3>
                    <div className='row container pt-5'>
                        <div className='col-6 container table float-right m-auto pl-4'>
                            <div className='float-left'>
                                <h6><strong><FaceRoundedIcon /> Nomor Induk Murid</strong></h6>
                            </div>
                            <div className="input-group mb-3">
                                <input onKeyPress={(e) => this.keyPressAct(e)} value={this.props.loginForm.nim} onChange={(e)=>this.props.inputNim(e.target.value)} type="text" className="form-control" placeholder="NIM" />
                            </div>
                            <div className='float-left'>
                                <h6><VpnKeyRoundedIcon /><strong> Password</strong></h6>
                            </div>
                            <div className="input-group mb-3">
                            <input
                                    onKeyPress={(e) => this.keyPressAct(e)}
                                    type={this.props.loginForm.hidePassword
                                        ? 'password' /*kondisi true*/
                                        : 'text' /*kondisi false*/
                                    }
                                    className="form-control"
                                    placeholder="Password"
                                    value={this.props.loginForm.password}
                                    onChange={(e) => this.props.inputPassword(e.target.value)}
                                />

                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon1" >
                                        {/* <VisibilityIcon  /> */}
                                        {this.props.loginForm.hidePassword 
                                            ? <VisibilityOffIcon onClick={this.props.hideUnhide} /> /*kondisi true*/
                                            : <VisibilityIcon onClick={this.props.hideUnhide} />/*kondisi false*/
                                        }
                                    </span>
                                </div>
                            </div>

                            <p style={{ fontSize: '12px', fontStyle: 'italic', color: 'red' }}>{this.props.loginForm.error}</p>
                            
                            <Button onClick={this.onBtnLoginStudent} variant="outlined" size='small' color="primary" className='shadow pr-5 pl-5'>Login</Button>
                            <p style={{ margin: '10px auto', fontSize: '15px' }}>
                                belum punya Akun ? silakan kontak admin
                            </p>
                        </div>

                        <div className='col-6 container float-left table'>
                            {/* <img src={require('../img/studentLogin.png')} alt='loginIMG' className='gambarlogin ' /> */}
                            <div className="main">
                                <Transition
                                    native
                                    unique
                                    items={this.state.index}
                                    from={{ opacity: 0, transform: 'translate3d(-15%,0,0)' }}
                                    enter={{ opacity: 1, transform: 'translate3d(-5%,0,0)' }}
                                >
                                    {index => pages[index]}
                                </Transition>
                            </div>
                        </div>

                        <div className='m-auto'>
                            {/* <Button variant="outlined" size="small">Login Murid</Button><Button variant="outlined" size="small">Login Murid</Button> */}
                            <h6>Login sebagai</h6>
                            <ButtonGroup aria-label="contained primary button group" size='small'>
                                <Button
                                    onClick={() => this.setState({ redirect: true })}
                                    style={{
                                        backgroundImage: 'linear-gradient(to bottom,  #d4fc79 0%, #96e6a1 100%)',
                                        color: 'black',
                                        padding: '10px 20px 10px 20px',
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px'
                                    }}
                                >
                                    Orangtua
                                </Button>
                                <Button style={{
                                    color: 'grey', padding: '10px 35px 10px 35px',
                                    borderTopRightRadius: '10px',
                                    borderBottomRightRadius: '10px'
                                }} disabled>
                                    Murid
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const sambungin=({user, loginForm})=>{
    return {user, loginForm}
}
export default connect (sambungin, {inputNim, inputPassword, hideUnhide, loginStudent}) (LoginOrtu);