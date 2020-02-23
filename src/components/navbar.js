import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './component.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { Button} from '@material-ui/core';


class Navbartop extends Component {
    state = {}

    

    render() {
        return (
            <div className='sticky-top'>
                <Navbar expand="md" className='navbarsaya' >
                    <div className='container' >

                    <Link to="/">
                        <NavbarBrand className='logo'>
                            &nbsp;<a style={{position:"relative"}} >koperasiQu</a>
                        </NavbarBrand>
                    </Link>

                        <Nav className="ml-auto" navbar >
                            <NavItem >
                                <NavLink href="#" className='tebal'>Beranda</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="#" className='tebal'>Tentang</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="#" className='tebal'>Belanja</NavLink>
                            </NavItem>
                         
                        </Nav>
                        <div className='kotaklogin'>
                            <NavbarText className='L float-left'>Login</NavbarText>
                            <Link to='/login' >
                                <Button className='btn tombol-login-ortu'>
                                    Orang Tua / Siswa
                                </Button>
                            </Link>

                        </div>
                    </div>
                </Navbar>

            </div>
        );
    }
}

export default Navbartop;
