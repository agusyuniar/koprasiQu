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

    onBtnLogin = () => {
        console.log(this.state);
        
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
                    {
                        {
                            borderRadius: '15px',
                            backgroundImage: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)'
                        }
                    }
                >
                    <h3><strong>Login sebagai Orang Tua</strong></h3>
                    <div className='row container pt-5'>
                        <div
                            className='col-6 container float-right table'
                        >
                            {/* <img src={require('../img/parentlogin.png')} alt='loginIMG' className='gambarlogin ' /> */}
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
                                <input type="text" size='small' className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group mb-3 container">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1" ><VpnKeyIcon /></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <Button
                                variant="outlined"
                                size='small'
                                color="primary"
                                className='shadow pr-5 pl-5'
                                onClick={this.onBtnLogin}
                            >
                                Login
                            </Button>

                            <p style={{ margin: '10px auto', fontSize: '15px' }}>
                                belum punya Akun ? <Link to='/register'>daftar disini</Link>
                            </p>
                            {/* <p style={{margin:'50px 20px 20px 20px', fontSize:'15px'}}>
                                bukan Orang Tua ?
                            </p> 
                            <Button variant="outlined" size="small">Login Murid</Button> */}

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
                                    onClick={()=>this.setState({redirect:true})}
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

export default LoginOrtu;