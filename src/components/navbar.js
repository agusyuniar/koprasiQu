import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './component.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { logoutUser } from "../redux/action";

class Navbartop extends Component {
    state={
        openPopOver:false
    }

    renderLoading = () => {
        if (!this.props.user.id) {
            console.log(this.props.user.id);
            return (
                <div className='kotaklogin'>
                    <LinearProgress />
                </div>
            )
        }
    }

    render() {
        console.log(this.props.user.id);
        console.log(this.state.openPopOver);
        
        return (
            <div className='sticky-top'>
                <Navbar expand="md" className='navbarsaya' >
                    <div className='container' >
                        <Nav className="left" >
                            <Link style={{ color: 'rgb(3, 86, 86)' }} to='/kopshop'>
                                <NavLink className='tebal'>
                                    <StorefrontIcon className='mr-2' alignmentBaseline='baseline' />
                                    Belanja
                                </NavLink>
                            </Link>
                        </Nav>

                        <Link to="/">
                            <NavbarBrand className='logo'>
                                <a style={{ position: "relative" }} >koprasiQu</a>
                            </NavbarBrand>
                        </Link>

                        <Nav className="ml-auto" navbar >
                            <NavItem >
                                <NavLink href="#" className='tebal'>Beranda</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="#" className='tebal'>Tentang</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link style={{ color: 'rgb(3, 86, 86)' }} to='/kopshop'>
                                    <NavLink className='tebal'>
                                        Belanja
                                    </NavLink>
                                </Link>
                            </NavItem>

                        </Nav>
                        {
                            this.props.user.id
                                ?
                                <div className='row'>
                                    <div>
                                    </div>
                                    <div className='kotaklogin'>
                                        {this.renderLoading()}
                                        <Link to='/mycart'>
                                        <ShoppingBasketIcon 
                                            className='border-right pr-1' 
                                            style={{ color: 'rgb(3, 86, 86)', margin: '0 5px 5px 5px' }} 
                                        />
                                        </Link>

                                        <NavbarText className='L h6 mt-2 ml-1'>Halo, &nbsp;</NavbarText>
                                        <Link to='/profile' className='L mr-2'>
                                            <span className='h6'>
                                                {this.props.user.firstname} ({this.props.user.username})
                                    </span>
                                        </Link>
                                        <Tooltip title='Sign Out' arrow={false} leaveDelay='100'>
                                            <ExitToAppIcon cursor='pointer' className=' m-auto pl-1' onClick={this.props.logoutUser} style={{ color: 'teal' }} />
                                        </Tooltip>
                                    </div>
                                </div>
                                :
                                <div className='kotaklogin'>
                                    <NavbarText className='L float-left'>Login</NavbarText>
                                    <Link to='/login' >
                                        <Button className='btn tombol-login-ortu'>
                                            Orang Tua / Siswa
                                    </Button>
                                    </Link>

                                </div>

                        }
                    </div>
                </Navbar>

            </div>
        );
    }
}

const sambungin = ({ user }) => {
    return { user }
}

export default connect(sambungin, { logoutUser })(Navbartop);
