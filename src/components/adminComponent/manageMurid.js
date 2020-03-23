import React, { Component } from 'react';
import { connect } from "react-redux";
import { API_URL_1 } from "../../helpers/apiurl";
import { getStudent, inputEditText, submitEditMurid, registerStudent, inputAddStudentText } from "../../redux/action";

class ManageMurid extends Component {
    state = { 
        selectedID:0
     }


    componentDidMount(){
        this.getInitialDataStudent()
    }

    getInitialDataStudent=()=>{
        this.props.getStudent()
    }

    onBtnEditSavePress=()=>{
        this.props.adminEdit.id = this.state.selectedID
        this.props.submitEditMurid(this.props.adminEdit)
        this.state.selectedID = 0
        this.getInitialDataStudent()
        // this.renderData()
    }

    renderData=()=>{
        return this.props.getData.dataMurid.map((data,index)=>{
            if(this.state.selectedID===data.id){
                return (
                    <tr>
                        <td className='border p-1' scope="row" >{index + 1}</td>
                        
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.nim}
                                onChange={(val) => this.props.inputEditText('nim', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.nim} />
                        </td>
                        <td className='border p-1'>
                            .....
                        </td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.firstname}
                                onChange={(val) => this.props.inputEditText('firstname', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.firstname} />
                        </td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.lastname}
                                onChange={(val) => this.props.inputEditText('lastname', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.lastname} />
                        </td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.alamat}
                                onChange={(val) => this.props.inputEditText('alamat', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.alamat} />
                        </td>
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.email_ortu}
                                onChange={(val) => this.props.inputEditText('email_ortu', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.email_ortu} />
                        </td>
                        <td className='border p-1'>
                            <input
                            defaultValue={data.profil_img}
                                value={this.props.adminEdit.profil_img}
                                onChange={(val) => this.props.inputEditText('profil_img', val.target.value)}
                                type="text"
                                className="form-control" placeholder={data.profil_img} />
                        </td>                        
                        <td className='border p-1'>
                            <input
                                value={this.props.adminEdit.saldo}
                                onChange={(val) => this.props.inputEditText('saldo', val.target.value)}
                                type="number"
                                className="form-control" placeholder={data.saldo} />
                        </td>
                        <td className='border p-1'>
                            <button onClick={() => this.setState({ selectedID: 0 })} style={{ backgroundColor: 'red' }}>Cancel</button>
                            <button onClick={this.onBtnEditSavePress} style={{ backgroundColor: 'green' }}>Save</button>
                        </td>
                        
                    </tr>
                )
            }
            return (
                <tr>
                    <td className='border p-1'>{index + 1}</td>
                    <td className='border p-1'>{data.nim}</td>
                    <td className='border p-1'>......</td>
                    <td className='border p-1'>{data.firstname}</td>
                    <td className='border p-1'>{data.lastname}</td>
                    <td className='border p-1'>{data.alamat}</td>
                    <td className='border p-1'>{data.email_ortu}</td>
                    <td className='border p-1'><img src={API_URL_1 + data.profil_img} width='70px' /></td>
                    <td className='border p-1'>{data.saldo}</td>
                    <td className='border p-1'>
                        <button onClick={() => this.setState({ selectedID: data.id })}>Edit</button>
                        {/* <button>Delete</button> */}
                    </td>
                </tr>
            )
        })
    }

    onBtnAddStudent=()=>{
        this.props.registerStudent(this.props.addStudent)
        this.getInitialDataStudent()
        this.getInitialDataStudent()
    }

    render() { 
        console.log(this.props.getData);
        console.log(this.props.addStudent);
        
        return (
            <div>
                <div className='h4 p-3'>Data Murid</div>
                <table className="shadow rounded p-5" >
                    <thead className='border p-1'>
                    <tr>    
                    <th className='border' scope="col">No</th>
                    <th className='border' scope="col">NIM</th>
                    <th className='border' scope="col">Password</th>
                    <th className='border' scope="col">Firstname</th>
                    <th className='border' scope="col">Lastname</th>
                    <th className='border' scope="col">Alamat</th>
                    <th className='border' scope="col">Email Ortu</th>
                    <th className='border' scope="col">Profil IMG</th>
                    <th className='border' scope="col">Saldo</th>
                    <th className='border' scope="col">Menu</th>
                    </tr>
                    </thead>
                    <tbody className='border p-1'>
                        {this.renderData()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='border p-1'>
                                #
                            </td>
                            <td className='border p-1'>
                                <input
                                    value={this.props.addStudent.nim}
                                    onChange={(val) => this.props.inputAddStudentText('nim', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='NIM' />
                            </td>
                            <td className='border p-1'>
                                <input
                                    value={this.props.addStudent.password}
                                    onChange={(val) => this.props.inputAddStudentText('password', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='Password' />
                            </td>
                            <td className='border p-1'>
                                <input
                                    value={this.props.addStudent.firstname}
                                    onChange={(val) => this.props.inputAddStudentText('firstname', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='Firstname' />
                            </td>
                            <td className='border p-1'>
                                <input
                                    value={this.props.addStudent.lastname}
                                    onChange={(val) => this.props.inputAddStudentText('lastname', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='Lastname' />
                            </td>
                            <td className='border p-1'>
                                <input
                                    value={this.props.addStudent.alamat}
                                    onChange={(val) => this.props.inputAddStudentText('alamat', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='Alamat' />
                            </td>
                            <td className='border p-1'>
                                <input
                                    value={this.props.addStudent.email_ortu}
                                    onChange={(val) => this.props.inputAddStudentText('email_ortu', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='email orangtua' />
                            </td>
                            <td>
                                Pilih Gambar
                            </td>
                            <td className='border p-1'>
                                <input
                                    value={0}
                                    onChange={(val) => this.props.inputAddStudentText('saldo', val.target.value)}
                                    type="text"
                                    className="form-control" placeholder='email orangtua' />
                            </td>
                            <td className='border p-1'>
                                <button onClick={this.onBtnAddStudent}>Add</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
 
const sambungin=({getData, adminEdit, addStudent})=>{
    return {getData, adminEdit, addStudent}
}

export default connect (sambungin, {getStudent, inputEditText, submitEditMurid, registerStudent, inputAddStudentText}) (ManageMurid);