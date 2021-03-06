import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { API_URL_1 } from "../helpers/apiurl";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomInput } from 'reactstrap';
import HistoriTransaksi from "../components/historiTransaksiParent";
import { Table, Button, Divider, ButtonGroup } from "@material-ui/core";
import { inputUsername, 
        inputPassword, 
        loginUserParent, 
        profilePictureState,
        selectNIMtoGlobal } from "../redux/action";


class ProfilePage extends Component {
    state = {
        openModalEditPP: false,
        editImageName: 'Pilih gambar...',
        editImageFile: undefined,
        PP: this.props.user.profil_img,
        selectedMurid: null,
        showHistori:false
    }


    onEditImageChange = (e) => {
        console.log(e.target.files);

        if (e.target.files[0]) {
            this.setState({ editImageName: e.target.files[0].name, editImageFile: e.target.files[0] })
        }
        else {
            this.setState({ editImageName: 'Select Image...', editImageFile: undefined })
        }

    }
    onBtnConfirmEditImage = () => {
        var formData = new FormData()
        const token = localStorage.getItem('ptoken')
        console.log(token);

        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }

        var data = {
            caption: this.state.captionEdit,
        }


        formData.append('image', this.state.editImageFile)
        console.log(this.state.editImageFile);
        console.log((this.state.editImageFile.name).split('.'));


        formData.append('data', JSON.stringify(data))

        axios.put(API_URL_1 + `/profile/editStudentPP/` + this.props.user.id, formData, headers)
            .then((res) => {
                console.log(res);
                console.log(this.props.user.profil_img);
                this.props.profilePictureState(this.props.user.profil_img)
                console.log(this.props.profile)
                // this.setState({openModalEditPP: false,})
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getProfileData()

    }


    getProfileData = () => {
        console.log(this.props.user.id);
        // if (this.props.user.id) {
        return (
            axios.get(API_URL_1 + `/user/student/${this.props.user.id}`)
                .then((res) => {
                    console.log(res.data[0].profil_img);
                    this.setState({ PP: res.data[0].profil_img })
                    this.props.profilePictureState(this.state.PP)
                    // this.setState({PP:this.props.profile})
                    console.log(this.props.profilePictureState(this.state.PP));
                    console.log(this.state.PP);


                    // this.props.user.profil_img=res.data[0].profil_img
                }).catch((err) => {
                    console.log('Masuk Catch')
                    console.log(err.response)
                })

        )
        // }
    }

    resendVerif = () => {
        console.log(this.props.user.username)
        console.log(this.props.user.password)
        let { username, password, email, verified } = this.props.user
        axios.post(API_URL_1 + `/user/resendVerification/`, { username: username, password: password, email: email, verified: verified })
            .then((res) => {
                console.log(res.data);
                window.alert('Link verifikasi sudah terkirim ke email anda.\nSilakan cek email anda sekarang')
            })
            .catch(err => {
                window.alert('Gagal mengirim link verifikasi, silakan coba beberapa saat lagi', err)
            })
    }

    renderListAnak = () => {
        console.log(this.props.user.anak[0].nim);
        if (this.props.user.anak[0].nim === null) {
            return <p style={{ fontSize: '12pt' }}>data anak tidak ditemukan atau belum terdaftar</p>
        }
        else if (this.props.user.verified === 0) {
            return <p style={{ fontSize: '12pt' }}>Data anak tersedia, silakan <a onClick={this.resendVerif} style={{ color: 'teal' }}>verifikasi email untuk menampilkan data</a></p>
        }
        else {
            return this.props.user.anak.map((val, index) => {
                console.log(val.nim);
                console.log(val.nama);
                return (
                    <tr className='border-bottom m-3'>
                        <td className='pr-3 mt-4'>{index + 1}</td>
                        <td >
                            <tr >
                                <td style={{ paddingRight: '120px' }}>NIM</td>
                                <td>{val.nim}</td>
                            </tr>
                            <tr>
                                <td >Nama Siswa</td>
                                <td>{val.nama}</td>
                            </tr>
                            <tr>
                                <td >Alamat</td>
                                <td>{val.alamat}</td>
                            </tr>
                            <tr>
                                <td >Saldo</td>
                                <td>Rp {val.saldo.toLocaleString()}</td>
                            </tr>
                        </td>
                        {/* <td style={{ width: '15%' }}><Button onClick={()=>this.onBtntoDetailMurid(val.nim)}>Detail</Button></td> */}
                        <td style={{ width: '15%' }}><Link to={{pathname:'/detailMurid', state:{nim:val.nim}}}>Detail</Link></td>
                    </tr>
                )
            })
        }
    }
    
    onBtntoDetailMurid=(val)=>{
        console.log(val);
        this.props.selectNIMtoGlobal(val)
        console.log(this.props.detailMurid);
        return <Redirect to={{
            pathname: '/detailmurid',
            // state: { selectedMurid:val }
        }}/>
    }
            

    render() {

    //    // console.log(localStorage.getItem('ptoken'));
    //     console.log(this.props.user);
    //     console.log(this.props.user.profil_img);
    //     // console.log(this.state.openModalEditPP);
    //     console.log(localStorage.getItem('ptoken'));
    //     console.log(this.props.detailMurid);
    //     console.log(this.state.selectedMurid);
        console.log(this.state.editImageFile);
        


        // if (this.props.user.id) {
        if (!localStorage.getItem('ptoken')) {
            this.state.redirect = true
            return <Redirect to="/" />
        }
        else if (!this.props.user.id) {
            return <LinearProgress />
        }else if(this.props.user.username==='admin'){
            this.state.redirect = true
            return <Redirect to="/admin" />
        }
        if (!this.state.PP) {
            this.getProfileData()
        }

        return (
            <div style={{ backgroundImage: "linear-gradient(to bottom, #fff 0%, #ebedee 100%)", paddingBottom: '100px' }}>
                <h3 className='container pt-5 pb-2 border-bottom'>
                    profile page
                    </h3>

                <div className='container p-3 shadow' style={{ backgroundColor: 'white', borderRadius: '15px' }}>
                    {/* title */}
                    <div className='row'>
                        <div className='col-6 float-left'>
                            <h4 ><AccountCircleTwoToneIcon alignmentBaseline='auto' /> {this.props.user.firstname}  
                            </h4>
                        </div>
                        <div className='col-6'>
                            <span className='float-right'>Login terakhir : {this.props.user.lastlogin}</span>
                        </div>
                    </div>

                    <div className='container border rounded'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='margin-auto text-center border rounded p-2 m-3  shadow '>
                                    {/* <img src={`${API_URL_1}${this.props.user.profil_img}`} alt='profile pict' width='100%' className='p-3'/> */}
                                    <img src={`${API_URL_1}${this.state.PP}`} alt='profile pict' width='100%' className='p-3' />
                                    <Button
                                        onClick={() => this.setState({ openModalEditPP: !this.state.openModalEditPP })}
                                        size='small'
                                        variant='outlined'
                                        fullWidth='true'
                                        style={{ color: 'teal' }}
                                    >
                                        Ubah Foto
                                    </Button>
                                    
                                    

                                    {/*--------------- modals -------------------------------------------------------------------------------------------------*/}
                                    <Modal isOpen={this.state.openModalEditPP} className=''>
                                        <ModalHeader >Ubah Foto</ModalHeader>
                                        <ModalBody>

                                            <CustomInput id="editImagePost" type="file" label={this.state.editImageName} onChange={this.onEditImageChange} />
                                            {/* <input type='file' placeholder={this.state.editImageName} onChange={this.onEditImageChange} /> */}
                                            <div style={{ fontSize: '10pt', margin: '20px 20px 20px 5px', fontWeight: 'initial' }}>format file yang diizinkan :  *.jpg  *.jpeg  *.png  *.gif</div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" size='small' onClick={() => this.onBtnConfirmEditImage()}>Simpan</Button>{' '}
                                            <Button color="secondary" size='small' onClick={() => this.setState({ openModalEditPP: !this.state.openModalEditPP })}>Batal</Button>
                                        </ModalFooter>
                                    </Modal>
                                    {/* --------------end modal---------------------------------------------------------------------------------------------- */}
                                </div>

                                <div className='margin-auto text-center border rounded p-2 m-3  shadow '>
                                <ButtonGroup
                                    orientation="vertical"
                                    color="primary"
                                    size='small'
                                >
                                    <Button onClick={()=>this.setState({showHistori:!this.state.showHistori})}>Daftar Transaksi</Button>
                                    <Button >Histori Belanja</Button>
                                    <Button>Adm. Sekolah</Button>
                                </ButtonGroup>
                                </div>



                            </div>

                            

                            <div className='col-9'>

                                {/* data pribadi */}

                                <div className='h5 pt-3'>
                                    Data diri
                                        <Tooltip title='Perbarui data diri anda' arrow leaveDelay='100'>
                                        <a style={{ fontSize: '12pt', paddingLeft: '15px' }}>
                                            ubah
                                            </a>
                                    </Tooltip>
                                </div>
                                <table>
                                    <tbody>
                                        <tr >
                                            <td style={{ paddingRight: '30px' }}>Nomor Induk Murid</td>
                                            <td>{this.props.user.nim} &nbsp; ( id : {this.props.user.id} )</td>
                                        </tr>
                                        <tr >
                                            <td style={{ paddingRight: '30px' }}>Nama Lengkap</td>
                                            <td>{this.props.user.firstname} &nbsp;{this.props.user.lastname}</td>
                                        </tr>
                                        <tr >
                                            <td style={{ paddingRight: '30px' }}>Email</td>
                                            <td>{this.props.user.email_ortu}
                                            {/* {this.props.user.verified==1 ?
                                            <span style={{fontSize: '10pt', color: 'green', fontStyle:'italic' }}>
                                                <CheckCircleOutlineRoundedIcon className='ml-3' fontSize='small'/> email terverifikasi</span>
                                                :
                                            <span style={{fontSize: '10pt', color: 'orange', fontStyle:'italic' }}>
                                                <ErrorOutlineOutlinedIcon className='ml-3' fontSize='small'/> email belum di verifikasi</span>
                                            } */}
                                            </td>
                                        </tr>
                                        <tr >
                                            <td style={{ paddingRight: '30px' }}>Alamat</td>
                                            {
                                                this.props.user.alamat
                                                    ?
                                                    <td>{this.props.user.alamat}</td>
                                                    :
                                                    <td style={{ fontStyle: 'italic' }}>alamat belum ada</td>
                                            }
                                        </tr>
                                    </tbody>
                                </table>

                                <div>
                                    {
                                        this.state.showHistori ? <HistoriTransaksi /> : null
                                    }
                                </div>

                                {/* data murid */}
                                <div className='h5 mt-5 p-2 mb-5 border rounded'>
                                    {/* <div className='pb-2'>
                                        Data Anak
                                            <Tooltip title='Daftarkan anak anda ke akun anda' leaveDelay='100' arrow >
                                            <a style={{ fontSize: '12pt', paddingLeft: '10px' }}>
                                                tambah
                                                </a>
                                        </Tooltip>
                                    </div> */}

                                    <table style={{ width: '100%' }}>
                                        {this.props.user.anak
                                            ?
                                            <tbody>
                                                {this.renderListAnak()}
                                            </tbody>
                                            :
                                            null
                                        }
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )



        // }
    }
}

const sambungin = ({ user, loginForm, profile, detailMurid }) => {
    return { user, loginForm, profile, detailMurid }
}
export default connect(sambungin, { inputUsername, inputPassword, loginUserParent, profilePictureState, selectNIMtoGlobal })(ProfilePage);