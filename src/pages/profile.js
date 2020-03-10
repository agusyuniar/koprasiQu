import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { API_URL_1 } from "../helpers/apiurl";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { Table, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomInput } from 'reactstrap';
import { inputUsername, inputPassword, loginUserParent, profilePictureState } from "../redux/action";


class ProfilePage extends Component {
    state = {
        openModalEditPP: false,
        editImageName: 'Pilih gambar...',
        editImageFile: undefined,
        PP: this.props.user.profil_img
    }


    onEditImageChange = (e) => {
        console.log(e);

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

        axios.put(API_URL_1 + `/profile/editPP/` + this.props.user.id, formData, headers)
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
    
    componentDidMount(){
        this.getProfileData()            
        
    }
            

    getProfileData = () => {
        console.log(this.props.user.id);
        // if (this.props.user.id) {
            return (
                axios.get(API_URL_1 + `/user/parent/${this.props.user.id}`)
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

        renderListAnak = () => {

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
                        <td style={{ width: '15%' }}><Button>Detail</Button></td>
                    </tr>
                )
            })

        }

        render() {

            // console.log(localStorage.getItem('ptoken'));
            // console.log(this.props.user.anak);
            console.log(this.props.user.profil_img);
            // console.log(this.state.openModalEditPP);
            console.log(localStorage.getItem('ptoken'));
            console.log(this.props.user.id);

            console.log(this.props.profile);



            // if (this.props.user.id) {
            if (!localStorage.getItem('ptoken')) {
                this.state.redirect = true
                return <Redirect to="/" />
            }
            else if (!this.props.user.id) {
                return <LinearProgress />
            }
            if(!this.state.PP){
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
                                <h4><AccountCircleTwoToneIcon alignmentBaseline='auto' /> {this.props.user.username}</h4>
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
                                        <p style={{ fontSize: '10pt', margin: '20px 0 20px 0', fontWeight: 'initial' }}>format file : jpg jpeg png gif</p>
                                        {/*--------------- modals -------------------------------------------------------------------------------------------------*/}
                                        <Modal isOpen={this.state.openModalEditPP} className=''>
                                            <ModalHeader >Ubah Foto</ModalHeader>
                                            <ModalBody>

                                                <CustomInput id="editImagePost" type="file" label={this.state.editImageName} onChange={this.onEditImageFileChange} multiple />
                                                <input type='file' onChange={this.onEditImageChange} />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="primary" size='small' onClick={() => this.onBtnConfirmEditImage()}>Simpan</Button>{' '}
                                                <Button color="secondary" size='small' onClick={() => this.setState({ openModalEditPP: !this.state.openModalEditPP })}>Batal</Button>
                                            </ModalFooter>
                                        </Modal>
                                        {/* --------------end modal---------------------------------------------------------------------------------------------- */}
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
                                                <td style={{ paddingRight: '30px' }}>Username</td>
                                                <td>{this.props.user.username} &nbsp; ( id : {this.props.user.id} )</td>
                                            </tr>
                                            <tr >
                                                <td style={{ paddingRight: '30px' }}>Nama</td>
                                                <td>{this.props.user.firstname} &nbsp;{this.props.user.lastname}</td>
                                            </tr>
                                            <tr >
                                                <td style={{ paddingRight: '30px' }}>Email</td>
                                                <td>{this.props.user.email}</td>
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

                                    {/* data murid */}
                                    <div className='h5 mt-5 p-2 mb-5 border rounded'>
                                        <div className='pb-2'>
                                            Data Anak
                                            <Tooltip title='Daftarkan anak anda ke akun anda' leaveDelay='100' arrow >
                                                <a style={{ fontSize: '12pt', paddingLeft: '10px' }}>
                                                    tambah
                                                </a>
                                            </Tooltip>
                                        </div>

                                        <table style={{ width: '100%' }}>
                                            <tbody>
                                                {this.renderListAnak()}

                                            </tbody>
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

    const sambungin = ({ user, loginForm, profile }) => {
        return { user, loginForm, profile }
    }
    export default connect(sambungin, { inputUsername, inputPassword, loginUserParent, profilePictureState })(ProfilePage);