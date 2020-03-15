import React, { Component } from 'react';
import { Button } from "reactstrap";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class NavStore extends Component {
    state = {}
    render() {
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    
                <a className="navbar-brand" href="#">KoprasiQu Online Stall</a>
                <Divider style={{ height: 28, margin: 15, }} orientation="vertical" />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" dropdown aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <Divider style={{ height: 28, margin: 15, marginRight:30}} orientation="vertical" />

                    <form className="form-inline my-2 my-lg-0">
                    <div
                            className='float-right m-auto'
                            component="form"
                            style={{
                                // padding: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                            {/* <IconButton className aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}

                            <InputBase
                                style={{ width: '30vw' }}
                                placeholder="Cari barang yang sesuai"
                            />
                            <Divider style={{ height: 28, margin: 4, }} orientation="vertical" />
                            <IconButton type="submit" className aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            </div>
                    </form>
                </div>
                </div>
                </nav>
                );
                    }
                }
                 
export default NavStore;