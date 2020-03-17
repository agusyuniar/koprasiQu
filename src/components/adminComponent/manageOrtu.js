import React, { Component } from 'react';
import { connect } from "react-redux";
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { API_URL_1 } from "../../helpers/apiurl";
import { getUserOrtu, inputEditText, submitEdit } from "../../redux/action";



class ManageMurid extends Component {
    state = {
        selectedID: 0
    }

    componentDidMount() {
        this.getInitialDataOrtu()
    }
    getInitialDataOrtu = () => {
        this.props.getUserOrtu()
    }

    renderData = () => {
        return this.props.getData.dataParent.map((data, index) => {
            //define role
            console.log(data.alamat);
            
            if (data.role_id == 1) {
                var role_idrender = 'SuperAdmin'
            }
            else if (data.role_id == 2) {
                var role_idrender = 'AdminToko'
            }
            else if (data.role_id == 3) {
                var role_idrender = 'AdminParent'
            }
            else if (data.role_id == 4) {
                var role_idrender = 'UserStudent'
            }

            if (data.verified) {
                var verifiedrender = <CheckCircleOutlineRoundedIcon style={{ color: 'green' }} />
            } else {
                var verifiedrender = <ErrorOutlineOutlinedIcon style={{ color: 'red' }} />
            }
            var anak = JSON.parse(data.anak)
            console.log(anak);

            if (this.state.selectedID == data.id) {
                return (
                    <tr>
                        <td className='border p-1' scope="row" >{index + 1}</td>
                        <td className='border p-1'>
                            <input
                                // onChange={(val) => this.props.inputEditText('id', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.id} /></td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.verified}
                                onChange={(val) => this.props.inputEditText('verified', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.verified} />
                        </td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.username}
                                onChange={(val) => this.props.inputEditText('username', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.username} /></td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.firstname}
                                onChange={(val) => this.props.inputEditText('firstname', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.firstname} /></td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.lastname}
                                onChange={(val) => this.props.inputEditText('lastname', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.lastname} /></td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.alamat}
                                onChange={(val) => this.props.inputEditText('alamat', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.alamat} /></td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.email}
                                onChange={(val) => this.props.inputEditText('email', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.email} /></td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.role_id}
                                onChange={(val) => this.props.inputEditText('role_id', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.role_id} /></td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.profil_img}
                                onChange={(val) => this.props.inputEditText('profil_img', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.profil_img} /></td>
                        <td className='border p-1'><input
                            // value={this.props.regisForm.confPassword}
                            // onChange={(val) => this.props.inputText('username', val.target.value)}
                            type="text"
                            className="form-control" placeholder='Edit di Manage Siswa' disabled /></td>
                        <td className='border p-1'>
                            <button onClick={() => this.setState({ selectedID: 0 })} style={{ backgroundColor: 'red' }}>Cancel</button>
                            <button onClick={this.onBtnEditSavePress} style={{ backgroundColor: 'green' }}>Save</button>
                        </td>
                    </tr>
                )
            }
            return (
                <tr>
                    <td className='border p-1' scope="row">{index + 1}</td>
                    <td className='border p-1'>{data.id}</td>
                    <td className='border p-1'>{verifiedrender}</td>
                    <td className='border p-1'>{data.username}</td>
                    <td className='border p-1'>{data.firstname}</td>
                    <td className='border p-1'>{data.lastname}</td>
                    <td className='border p-1'>{data.alamat}</td>
                    <td className='border p-1'>{data.email}</td>
                    <td className='border p-1'>{data.role_id}</td>
                    <td className='border p-1'><img src={API_URL_1 + data.profil_img} height='100' /></td>
                    <td className='border p-1'>{
                        anak.map((list) => {
                            if (!list.nim) {
                                return 'Belum terhubung'
                            }
                            return (
                                <div className='border p-1'>
                                    <ExpansionPanel >
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon fontSize='small' />}
                                            // aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <p className='p'>{list.nama}</p>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <table className=''>
                                                <tr className='border'>
                                                    <td className='border'>NIM</td>
                                                    <td className='border'>Alamat</td>
                                                    <td className='border'>Saldo</td>
                                                    <td className='border'>Avatar</td>
                                                </tr>
                                                <tr className='border'>
                                                    <td className='border'>{list.nim}</td>
                                                    <td className='border'>{list.alamat}</td>
                                                    <td className='border'>Rp {list.saldo.toLocaleString()}</td>
                                                    <td className='border'><img src={API_URL_1 + list.profil_img} width='80px' /></td>
                                                </tr>
                                            </table>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>

                            )
                        })
                    }
                    </td>
                    <td className='border p-1'>
                        <button onClick={() => this.setState({ selectedID: data.id })}>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    onBtnEditSavePress = () => {
        var { verified, username, firstname, lastname, alamat, email, role_id, profil_img } = this.props.adminEdit
        // if(verified||username||firstname||lastname||alamat||email||role_id||profil_img)
        this.props.adminEdit.id = this.state.selectedID
        this.props.submitEdit(this.props.adminEdit)
        this.state.selectedID = 0
        this.getInitialDataOrtu()
        this.renderData()
    }

    showMurid = (id) => {
        console.log(id);
        return <a>{id}</a>
    }



    render() {

        console.log(this.props.getData.dataParent);

        return (
            <div>
                <div className='h4 p-3'>Data Orang Tua</div>
                <table className="shadow rounded p-5" >
                    <thead className='border p-1'>
                        <tr>
                            <th className='border' scope="col">No</th>
                            <th className='border' scope="col">ID</th>
                            <th className='border' scope="col">Verified</th>
                            <th className='border' scope="col">Username</th>
                            <th className='border' scope="col">Nama Depan</th>
                            <th className='border' scope="col">Nama Belakang</th>
                            <th className='border' scope="col">Alamat</th>
                            <th className='border' scope="col">Email</th>
                            <th className='border' scope="col">Role</th>
                            <th className='border' scope="col">Avatar</th>
                            <th className='border' scope="col">Anak</th>
                            <th className='border' scope="col">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const sambungin = ({ getData, adminEdit }) => {
    return { getData, adminEdit }
}
export default connect(sambungin, { getUserOrtu, inputEditText, submitEdit })(ManageMurid);