import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
// import { Input, Button } from '@fluentui/react';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, TextField } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Tooltip from '@material-ui/core/Tooltip';
import './component.css';
import { Transition, animated } from 'react-spring/renderprops';
import { inputUsername, inputPassword, loginUserParent, hideUnhide, KeepLogin } from "../redux/action";


class LoginOrtu extends Component {
    state = {
        redirect: false,
        index: 0
    }

    keyPressAct = (e) => {
        console.log(e.getModifierState('CapsLock'));
        if (e.key == 'Enter') {
            return this.onBtnLogin()
        }

    }

    onBtnLogin = () => {
        // var username = this.refs.username.value
        // var password = this.refs.password.value


        // this.props.loginUser(this.props.loginForm)
        // console.log(this.props.loginForm.username);
        // console.log(this.props.loginForm.password);
        console.log(this.props.loginForm);
        this.props.loginUserParent(this.props.loginForm)



    }



    render() {

        console.log(this.props.user);
        console.log(this.props.loginForm);

        if (this.props.user.id) {
            this.state.redirect = true
            return <Redirect to="/profile" />
        }

        const pages = [
            style => (
                <animated.div style={{ ...style }}>
                    <img src={require('../img/parentlogin.png')} alt='loginIMG' className='gambarlogin ' />
                </animated.div>
            )
        ]
        if (this.state.redirect) {
            return <Redirect push to="/student" />;
        }

        return (
            <div className='text-center container'>
                <div
                    className='container shadow p-3 mb-5 col-8'
                    style=
                    {{
                        borderRadius: '15px',
                        backgroundImage: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)'
                    }}
                >
                    <h3><strong>Login sebagai Orang Tua</strong></h3>
                    <div className='row container pt-5'>

                        <div className='col-6 container float-right table'>
                            <div className="main">
                                <Transition
                                    native
                                    unique
                                    items={this.state.index}
                                    from={{ opacity: 0, transform: 'translate3d(5%,0,0)' }}
                                    enter={{ opacity: 1, transform: 'translate3d(-5%,0,0)' }}
                                >
                                    {index => pages[index]}
                                </Transition>
                            </div>
                        </div>

                        <div className='col-6 container table float-left m-auto'>
                            <div className='float-left'>
                                <h6><strong><PersonRoundedIcon /> Username</strong></h6>
                            </div>
                            <div className="input-group  mb-3">
                                <input
                                    onKeyPress={(e) => this.keyPressAct(e)}
                                    type="text"
                                    size='small'
                                    className="form-control"
                                    placeholder="Username"
                                    value={this.props.loginForm.username}
                                    onChange={(e) => this.props.inputUsername(e.target.value)}
                                />
                            </div>

                            <div className='float-left'>
                                <h6><VpnKeyRoundedIcon /><strong> Password</strong></h6>
                            </div>
                            <div className="input-group mb-3 ">
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

                            <Button
                                variant="outlined"
                                size='small'
                                color="primary"
                                className='shadow pr-5 pl-5'
                                onClick={this.onBtnLogin}
                                type='submit'
                            >
                                Login
                            </Button>

                            <p style={{ margin: '10px auto', fontSize: '15px' }}>
                                belum punya Akun ? <Link to='/register'>daftar disini</Link>
                            </p>

                        </div>

                        <div className='m-auto'>
                            {/* <Button variant="outlined" size="small">Login Murid</Button><Button variant="outlined" size="small">Login Murid</Button> */}
                            <h6>Login sebagai</h6>
                            <ButtonGroup aria-label="contained primary button group" size='small'>
                                <Button disabled style={{
                                    color: 'grey',
                                    padding: '10px 20px 10px 20px',
                                    borderTopLeftRadius: '10px',
                                    borderBottomLeftRadius: '10px'
                                }}>
                                    Orangtua
                                </Button>

                                <Button
                                    onClick={() => this.setState({ redirect: true })}
                                    style={{
                                        backgroundImage: 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
                                        // backgroundColor: 'black', 
                                        padding: '10px 35px 10px 35px',
                                        borderTopRightRadius: '10px',
                                        borderBottomRightRadius: '10px'
                                    }}
                                >
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

const mapStatetoProps = ({ user, loginForm }) => {
    return { user, loginForm }
}

export default connect(mapStatetoProps/*ambil global state*/, { inputUsername, inputPassword, loginUserParent, hideUnhide, KeepLogin }/*isi global state (action creator)*/)(LoginOrtu);