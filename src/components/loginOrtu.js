import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import './component.css';
import { Transition, animated } from 'react-spring/renderprops'
import { inputLoginUsername, inputLoginPassword } from "../redux/action";

class LoginOrtu extends Component {
    state = {
        // username: '',
        // password: '',
        redirect: false,
        index: 0
    }

    onBtnLogin = () => {
        // console.log(this.state);
        // let { username, password } = this.state
        var username = this.refs.username.value
        var password = this.refs.password.value
        
        if (username!=''&& password!='') {
            this.props.login(username, password)
            console.log(username,password);
            console.log(this.props.login);
        }
        else {
            alert('harap diisi semua')
        }
    }


    render() {
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
                            <div className="input-group mb-3 container">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><PermIdentityIcon /></span>
                                </div>
                                <input 
                                    type="text" 
                                    size='small' 
                                    className="form-control" 
                                    placeholder="Username"
                                    onChange={(e) => this.props.inputLoginUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3 container">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1" ><VpnKeyIcon /></span>
                                </div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    onChange={(e) => this.props.inputLoginEmail(e.target.value)}
                                />
                            </div>

                            <Button
                                variant="outlined"
                                size='small'
                                color="primary"
                                className='shadow pr-5 pl-5'
                                onClick={()=>this.onBtnLogin()}
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

const mapStatetoProps = ({user}) => {
    return {user}
}

export default connect (mapStatetoProps, {inputLoginUsername, inputLoginPassword}) (LoginOrtu);