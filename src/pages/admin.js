import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DataOrtu from '../components/adminComponent/manageOrtu';

class LoginPage extends Component {
    state = { }

    toogleShow(){
        if(this.state.showMurid){
            this.state.showParent=false
            this.state.showProduct=false
        }
        else if(this.state.showParent){
            this.state.showMurid=false
            this.state.showProduct=false
        }
    }

    render() {
        console.log(this.state);
        
        return (
            <div className=' m-auto p-5' style={{ backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
                <div className=''>
                        <h3 className='pl-4 align-left'><strong>Halo, Admin</strong></h3>
                    <div className='container-flex text-center'>
                        <div className='p-3 rounded' style={{ backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            <div className=''>
                                <div className='border rounded p-3 m-2'>
                                    <ButtonGroup
                                        orientation="horizontal"
                                        color="light"
                                        size='small'
                                        variant='contained'
                                    >
                                        <Button style={{ textTransform: 'none', backgroundColor: '#cfd186' }}>Manage Siswa</Button>
                                        <Button onClick={()=>this.setState({showParent:!this.state.showParent})} style={{ textTransform: 'none', backgroundColor: '#cfd186' }}>Manage Orangtua</Button>
                                        <Button style={{ textTransform: 'none', backgroundColor: '#cfd186' }}>Manage Product</Button>
                                        <Button style={{ textTransform: 'none', backgroundColor: '#cfd186' }}>Manage siswa</Button>
                                    </ButtonGroup>
                                </div>
                                <div className='border rounded p-3 m-2'>
                                    {/* render Parent */}
                                    {this.state.showParent?<DataOrtu/>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const sambungin = ({ adminEdit }) => {
    return { adminEdit }
}
export default connect(sambungin)(LoginPage);