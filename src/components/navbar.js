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
import { Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';
import { logoutUser } from "../redux/action";


class Navbartop extends Component {
 

    renderLoading = () => {
        if(!this.props.user.id){
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
            
            return (
                <div className='sticky-top'>
                <Navbar expand="md" className='navbarsaya' >
                    <div className='container' >

                    <Link to="/">
                        <NavbarBrand className='logo'>
                            <a style={{position:"relative"}} >koprasiQu</a>
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
                        {
                            this.props.user.id 
                            ?
                            <div className='kotaklogin'>
                            {this.renderLoading()}
                    <NavbarText className='L h6 mt-2'>Halo, &nbsp;</NavbarText>
                                    <Link to='/profile' className='L'>
                                        <span className='h6'>
                                            {this.props.user.firstname} ({this.props.user.username})
                                    </span>
                                    </Link>
                                    <Tooltip title='Sign Out' arrow={false} leaveDelay='100'>
                                    <ExitToAppIcon cursor='pointer' className=' m-auto pl-1' onClick={this.props.logoutUser} style={{color:'teal'}}/>
                                    </Tooltip>
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

const sambungin = ({user}) => {
    return {user}
}

export default connect(sambungin,{logoutUser}) (Navbartop);
