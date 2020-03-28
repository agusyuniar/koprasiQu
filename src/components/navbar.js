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
import { logoutUser, getCartbyParent } from "../redux/action";

class Navbartop extends Component {
    state={
        openPopOver:false
    }

    
    renderLoading = () => {
        // this.props.getCartbyParent(this.props.user.id)
        if (!this.props.user.id) {
            console.log(this.props.user.id);
            return (
                <div className='kotaklogin'>
                    <LinearProgress />
                </div>
            )
        }
    }
    
    renderKotakUser=()=>{
        
        return this.props.productReducer.listCart.map((item, index) => {
            return (
                <React.Fragment>
                    <tr className='m-2'>
                        <td className='p-2'>
                            <div style={{fontSize:'12pt',padding:'5px auto'}}>{item.nama_product}</div>
                        </td>
                        <td className='p-2'>
                            <div style={{fontSize:'12pt',padding:'5px auto'}}>{item.total}</div>
                        </td>
                        <td className='p-2'>
                            <div style={{fontSize:'12pt',padding:'5px auto'}}>{item.harga}</div>
                        </td>
                    </tr>
                    {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                    {"It's very engaging. Right?"} */}
                </React.Fragment>
            )
        })
    }

    render() {
        console.log(this.props.user.id);
        console.log(this.props.productReducer.listCart);
        // this.props.getCartbyParent(this.props.user.id)
        
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
                                        <Tooltip
                                        arrow='true'
                                                style={{backgroundColor: '#fff',
                                                        color: 'rgba(0, 0, 0, 1)',
                                                        // maxWidth: '400px',
                                                        // fontSize: '14pt',
                                                        border: '1px solid #dadde9',}}
                                                title=
                                                {this.renderKotakUser()}
                                        >

                                        <ShoppingBasketIcon 
                                            className='border-right pr-1' 
                                            style={{ color: 'rgb(3, 86, 86)', margin: '0 5px 5px 5px' }} 
                                            />
                                            </Tooltip>
                                        </Link>

                                        <NavbarText className='L h6 mt-2 ml-1'>Halo, &nbsp;</NavbarText>
                                        <Link to='/profile' className='L mr-2'>
                                            <span className='h6'>
                                                {this.props.user.firstname} { this.props.user.username ? (this.props.user.username) : null}
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

const sambungin = ({ user, productReducer }) => {
    return { user, productReducer }
}

export default connect(sambungin, { logoutUser, getCartbyParent })(Navbartop);
