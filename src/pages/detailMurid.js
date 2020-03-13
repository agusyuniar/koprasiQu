import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { API_URL_1 } from "../helpers/apiurl";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { Table, Button, Divider, ButtonGroup } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomInput } from 'reactstrap';
import {
    inputUsername,
    inputPassword,
    loginUserParent,
    profilePictureState,
    selectNIMtoGlobal
} from "../redux/action";


class ProfilePage extends Component {
    state = {
        profilImg: null
    }

    componentDidUpdate() {
        if (!this.state.profilImg === null) {
            return this.renderPP
        }
    }

    renderDetail = () => {
        var nimstorage = localStorage.getItem('nim')
        let selectednim = this.props.user.anak.filter((val) => {
            return val.nim == nimstorage
        })
        console.log(selectednim[0].profil_img);

        this.state.profilImg = selectednim[0].profil_img
        console.log(this.state.profilImg);
        return (
            <div className='row'>

                <div className='col-3 p-3'>
                    <div className='margin-auto text-center border rounded pb-2 mb-4  shadow '>
                        {/* <img src={`${API_URL_1}${this.props.user.profil_img}`} alt='profile pict' width='100%' className='p-3'/> */}
                        <img src={`${API_URL_1}${this.state.profilImg}`} alt='profile picture' width='100%' className='p-3' />
                    </div>
                    <div className='text-center'>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            size='small'
                        >
                            <Button startIcon={<CreditCardIcon/>} >Tambah Saldo</Button>
                            <Button >Histori Belanja</Button>
                            <Button>Adm. Sekolah</Button>
                        </ButtonGroup>
                    </div>
                </div>

                <div className='col-9 '>
                    <div className='h5 pt-3 pb-2 mb-4 border-bottom row'>
                        <div className='col-6 float-left'>
                            Data Murid (NIM : {selectednim[0].nim})
                    </div>
                        <div className='col-6 float-right'>
                            <AccountBalanceWalletIcon fontSize='small' />
                            <span className='h6'> Rp {selectednim[0].saldo.toLocaleString()}</span>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className='pr-4 pb-2'>Nama </td>
                                <td className='h6 pr-4 pb-2'>: {selectednim[0].nama}</td>
                            </tr>
                            <tr>
                                <td className='pr-4 pb-2'>NIM </td>
                                <td className='h6 pr-4 pb-2'>: {selectednim[0].nim}</td>
                            </tr>
                            <tr>
                                <td className='pr-4 pb-2'>Alamat </td>
                                <td className='h6 pr-4 pb-2'>: {selectednim[0].alamat}</td>
                            </tr>
                            <tr>
                                <td className='pr-4 pb-2'>ID Orangtua </td>
                                <td className='h6 pr-4 pb-2'>: {this.props.user.username}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    renderPP() {
        console.log(this.state.profilImg);
        if (this.state.profilImg) {
            return <img src={`${API_URL_1}${this.state.profilImg}`} alt='profile picture' width='100%' className='p-3' />
        }
    }
    render() {
        console.log(this.props.user.anak);
        console.log(API_URL_1, this.state.profilImg);


        if (this.props.location.state) {
            localStorage.setItem('nim', this.props.location.state.nim)
        }

        if (!localStorage.getItem('ptoken')) {
            this.state.redirect = true
            return <Redirect to="/" />
        } else if (!this.props.user.id) {
            return <LinearProgress />
        }

        return (
            <div style={{ backgroundImage: "linear-gradient(to bottom, #fff 0%, #ebedee 100%)", paddingBottom: '100px' }}>
                <h3 className='container pt-5 pb-2 border-bottom'>
                    detail murid
                    </h3>

                <div className='container p-3 shadow' style={{ backgroundColor: 'white', borderRadius: '15px' }}>
                    <div className='container border rounded'>
                        {this.renderDetail()}

                    </div>
                </div>
            </div>
        )
    }
}

const sambungin = ({ user, loginForm, profile, detailMurid }) => {
    return { user, loginForm, profile, detailMurid }
}
export default connect(sambungin, { inputUsername, inputPassword, loginUserParent, profilePictureState, selectNIMtoGlobal })(ProfilePage);