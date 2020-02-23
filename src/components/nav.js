import React, { Component } from 'react';
import './component.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import Swal from 'sweetalert2';
import clsx from 'clsx';
import { FormControl, IconButton, InputLabel, Button, TextField, Popover, Box, Typography } from '@material-ui/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


class Navbartop extends Component {
  state = {}

  LoginForm = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      html:
        '<TextField id="standard-basic" label="Standard" />' +
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags'
      ,
    })
      .then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
  }

  render() {
    return (
      <div className='sticky-top' style={
        {
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0)'
        }
      }>
        <Navbar expand="md" className='navbarsaya' >
          <div className='container' >

            <NavbarBrand href="/" className='logo'>
              <img src={require('../img/icon.png')} alt='koperasiQu' />
              {/* <h1>logo</h1> */}
              &nbsp;koperasiQu
          </NavbarBrand>

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
              {/* <div className='loginForm '>
              <FormControl>
                <TextField id="standard-basic" label="ID" />
                <TextField id="standard-basic" label="Password" type='password' />
              </FormControl>
            </div> */}
            </Nav>
            <div className='kotaklogin'>
              <NavbarText className='L float-left'>Login</NavbarText>
              
              <PopupState variant="popover" popupId="demo-popup-popover" className='popover-border'>
                {popupState => (
                  <div className='float-left'>
                    <Button className='btn tombol-login-ortu' {...bindTrigger(popupState)}>
                      Orang Tua
                    </Button>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Box p={2} className='popover-border'>
                        <FormControl className='m-auto'>
                          <TextField id="standard-basic" label="Username" />
                          <TextField id="standard-basic" label="Password" type='password' />
                          <Button className='btn btn-success'>Login</Button>
                        </FormControl>
                        {/* <Typography >The content of the Popover.</Typography> */}
                      </Box>
                    </Popover>
                  </div>
                )}
              </PopupState>
              {/* <Button onClick={this.LoginForm} className='btn tombol-login-ortu'>Orang Tua</Button> */}
              <PopupState variant="popover" popupId="demo-popup-popover" >
                {popupState => (
                  <div className='float-right'>
                    <Button className='btn tombol-login-siswa' {...bindTrigger(popupState)}>
                      Siswa
                    </Button>
                    <Popover 
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Box p={2}>
                        <FormControl className='m-auto p-3 transparan' >
                          <TextField id="standard-basic" label="ID Siswa" className='mb-3'/>
                          <TextField id="standard-basic" label="Password" type='password' className='mb-3'/>
                          <Button className='btn btn-primary'>Login</Button>
                        </FormControl>
                        {/* <Typography>The content of the Popover.</Typography> */}
                      </Box>
                    </Popover>
                  </div>
                )}
              </PopupState>
              {/* <Button className='btn tombol-login-siswa'>Siswa</Button> */}


            </div>
          </div>
        </Navbar>

      </div>
    );
  }
}

export default Navbartop;
