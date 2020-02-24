import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import './component.css';
import { Transition, animated } from 'react-spring/renderprops'

class LoginOrtu extends Component {
    state = {
        redirect: false,
        index: 0
    }

    btnAct = () => {
        this.setState({ redirect: true });
    }

    render() {
        const pages = [
            style => (
                <animated.div style={{ ...style }}>
                    <img src={require('../img/loginpict.png')} alt='loginIMG' className='gambarlogin ' />
                </animated.div>
            )
        ]
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
                        <div className='col-6 container table float-right m-auto'>
                            <div className="input-group mb-3 container">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><PermIdentityIcon /></span>
                                </div>
                                <input type="text" className="form-control" placeholder="NIM"/>
                            </div>
                            <div className="input-group mb-3 container">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1" ><VpnKeyIcon /></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password"/>
                            </div>
                            <Button variant="outlined" size='small' color="primary" className='shadow pr-5 pl-5'>Login</Button>
                            <p style={{ margin: '10px auto', fontSize: '15px' }}>
                                belum punya Akun ? <Link to='/register'>daftar disini</Link>
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
                                    onClick={()=>this.setState({redirect:true})}
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
                                <Button style={{ color: 'grey', padding: '10px 35px 10px 35px',
                                        borderTopRightRadius:'10px',
                                        borderBottomRightRadius:'10px'}} disabled>
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

export default LoginOrtu;