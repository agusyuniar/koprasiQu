import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput  } from 'reactstrap';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Swal from 'sweetalert2'
import { EDIT_SUCCESS } from "../../redux/action/types";
import { API_URL_1 } from "../../helpers/apiurl";
import { getProduct, inputEditText, submitEdit, deleteProduct, addProduct, editProduct } from "../../redux/action";
import Axios from 'axios';



class ManageMurid extends Component {
    state = {
        selectedID: 0,
        openModal: false,
        openModalIMG: false,
        toggleNested:false,
        dropdownOpen:false,
        dataimage:[]
    }

    componentDidMount() {
        this.getInitialDataProduct()
    }
    getInitialDataProduct = () => {
        this.props.getProduct()
    }
    editImageById=(img)=>{
        console.log(this.state.selectedID);
        console.log(img);
        
        // return Axios.put(API_URL_1+`product/editimageid/${this.state.selectedID}`,{
        //     img_path:
        // })
        // .then(res=>{
        //     console.log(res.data);
        //     this.setState({dataimage:res.data})
        //     console.log(this.state.dataimage);
        // })
        // .res(err=>{
        //     console.log(err);
            
        // })
    }

    imageProductName = (e) => {
        console.log(e.target.files)
        if (e.target.files[0]) {
            this.setState({ dataimage: e.target.files })
        } else {
            this.setState({ dataimage: e.target.files })
        }
    }

    onBtnPressAddProduct=()=>{
        // this.props.addProduct(this.props.adminEdit)
        var formData = new FormData() 
        var options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        for(var i = 0; i<this.state.dataimage.length; i++) {
            formData.append('image', this.state.dataimage[i])
        }
        Axios.post(API_URL_1 + `/product/addProduct`, this.props.adminEdit)
                .then(res => {
                    console.log('sukses', res.data.results.insertId)
                    this.setState({ openModal: false })
                    this.getInitialDataProduct()
                    var data = {
                        product_id: res.data.results.insertId
                    }
                    formData.append('data', JSON.stringify(data))
                    Axios.post(API_URL_1 + `/product/addProductImage`, formData, options)
                        .then(res => {
                            console.log('oke bisa', res);
                            this.getInitialDataProduct();
                            this.setState({ dataimage: [] })
                            this.setState({ openModal: false })
                        })
                        // window.location.reload()
                        .catch(err => {
                            console.log('gagal1', err)
                        })
                })
                .catch(err => {
                    console.log('gagal2', err)
                })
                this.props.addProduct()
    }

    renderData = () => {
        return this.props.getData.dataProduct.map((product, index) => {
            var images = JSON.parse(product.images)

            if (this.state.selectedID == product.id) {
                return (
                    <tr scope="row" key={index}>
                        <td className='border'>{index + 1}</td>
                        <td className='border'>
                            <input value={this.props.adminEdit.nama_product} onChange={(val)=>this.props.inputEditText('nama_product', val.target.value)} type="text" className="form-control" placeholder={product.nama_product} />
                        </td>
                        <td className='border'>
                            <input value={this.props.adminEdit.deskripsi} onChange={(val)=>this.props.inputEditText('deskripsi', val.target.value)} type="text" className="form-control" placeholder={product.deskripsi} />
                        </td>
                        <td className='border'>
                            <div>
                                {/* {()=>this.getImageById(product.id)} */}
                                <Button size='sm' color="danger" onClick={() => this.setState({ openModalIMG: !this.state.openModalIMG })}>Manage Image</Button>

                                <Modal isOpen={this.state.openModalIMG} toggle={() => this.setState({ openModalIMG: !this.state.openModalIMG })} className='container-flex'>
                                    <ModalHeader toggle={() => this.setState({ openModalIMG: !this.state.openModalIMG })}>Manage Image Product</ModalHeader>
                                    <ModalBody>
                                        <div className='row'>
                                            {
                                                images.map((item) => {
                                                    if (!item.img) {
                                                        return 'Gambar produk belum ada'
                                                    }
                                                    return(
                                                        <div className='m-1 border rounded'>
                                                            <td>
                                                            <tr><img src={API_URL_1 + item.img} width='150px' /></tr>
                                                            <tr>
                                                                {/* <button onClick={()=>this.setState({toggleNested:!this.state.toggleNested})}>Tambah</button> */}
                                                                <button onClick={()=>this.onDeleteBtnPress(item.id)}>Hapus</button>
                                                            </tr>
                                                            </td>
                                                        </div>
                                                        )
                                                })
                                            }
                                        </div>
                                        <br />
                                        {/* <Button color="success" onClick={this.setState({toggleNested:!this.state.toggleNested})}>Show Nested Modal</Button> */}
                                        <Modal isOpen={this.state.toggleNested} toggle={() => this.setState({ toggleNested: !this.state.toggleNested })} >
                                            <ModalHeader>Nested Modal title</ModalHeader>
                                            <ModalBody>
                                                <input type='file' placeholder='Tambah gambar' onChange={this.onEditImageChange} />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="primary" onClick={() => this.editImageById('123')}>Done</Button>
                                                <Button color="secondary" onClick>All Done</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.setState({ openModal: !this.state.openModal })}>Save</Button>{' '}
                                        <Button color="secondary" onClick={() => this.setState({ openModal: !this.state.openModal })}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </td>
                        <td className='border'>
                            <input value={this.props.adminEdit.stock} onChange={(val)=>this.props.inputEditText('stock', val.target.value)} type="number" className="form-control" placeholder={product.stock} />
                        </td>
                        <td className='border'>
                            <input value={this.props.adminEdit.harga} onChange={(val)=>this.props.inputEditText('harga', val.target.value)} type="number" className="form-control" placeholder={product.harga} />
                        </td>
                        <td>
                            <button onClick={()=>this.setState({selectedID:0})}>Cancel</button>
                            <button onClick={()=>this.onEditProductPress()}>Save</button>
                        </td>
                    </tr>
                )
            }
            return (
                <tr scope="row" key={index}>
                    <td className='border'>{index + 1}</td>
                    <td className='border'>{product.nama_product}</td>
                    <td className='border'>{product.deskripsi}</td>
                    <td className='border'>
                        {
                            images.map((item) => {
                                if (!item.img) {
                                    return 'Gambar produk belum ada'
                                }
                                return <img src={API_URL_1 + item.img} width='70px' />
                            })
                        }
                    </td>
                    <td className='border'>{product.stock}</td>
                    <td className='border'>Rp {product.harga.toLocaleString()}</td>
                    <td>
                        <button onClick={()=>this.setState({selectedID:product.id})}>Edit</button>
                        <button onClick={()=>this.onDeleteProductPress(product.id)}>Delete</button>
                        <button onClick={()=>this.setState({selectedID:0})}>Cancel</button>
                    </td>
                </tr>
            )
        })
    }
    onEditProductPress=()=>{
        this.props.adminEdit.id = this.state.selectedID
        this.props.editProduct(this.props.adminEdit)
        this.state.selectedID = 0
        this.getInitialDataProduct()
        this.getInitialDataProduct()
    }
    onDeleteProductPress = (id) => {
        Swal.fire({
            title: 'Yakin hapus produk?',
            text: "Produk yang di hapus tidak bisa dikembalikan lagi",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
        }).then((result) => {
            if (result.value) {
                this.props.deleteProduct(id)
                this.getInitialDataProduct()
                this.getInitialDataProduct()
                Swal.fire(
                    'Berhasil Hapus!',
                    'Produk telah dihapus.',
                    'success'
                )
            }
        })
        // this.renderData()
    }

    //delete image saat edit
    onDeleteBtnPress=(id)=>{
        Axios.delete(API_URL_1+`/product/deleteImageID/${id}`)
        .then(res=>{
            console.log(res);
            this.getInitialDataProduct()
        })
        .catch(err=>{
            console.log(err);
            
        })
    }

    render() {

        console.log(this.props.adminEdit);
        console.log(this.state.dataimage);
        

        return (
            <div>
                {/* -----------------------Modal Add Prdct--------------------------- */}
                <div>
                    <Modal isOpen={this.state.openModal} toggle={() => this.setState({ openModal: !this.state.openModal })} className>
                        <ModalHeader toggle={() => this.setState({ openModal: !this.state.openModal })}>Add Product KoprasiQu</ModalHeader>
                        <ModalBody>
                        <span className="input-group pt-2 pb-2">Nama Item</span>
                        <div className='m-auto'>
                            <div className="input-group input-group-sm ">
                                <input value={this.props.adminEdit.nama_product} onChange={(val)=>this.props.inputEditText('nama_product', val.target.value)} type="text" aria-label="Address" className="form-control" placeholder='Nama Produk yang ditampilkan' />
                            </div>
                        </div>
                        <span className="input-group pt-2 pb-2">Deskripsi</span>
                        <div className='m-auto'>
                            <div className="input-group input-group-sm ">
                                <input value={this.props.adminEdit.deskripsi} onChange={(val)=>this.props.inputEditText('deskripsi', val.target.value)} type="text" aria-label="Address" className="form-control" placeholder='Deskripsi produk' />
                            </div>
                        </div>
                        <span className="input-group pt-2 pb-2">Gambar Produk</span>
                            <div className='m-auto'>
                                <div className="input-group input-group-sm ">
                                    {/* <CustomInput id="editImagePost" type="file" label='Pilih gambar untuk produk' onChange={this.imageProductName} multiple /> */}
                                    <input type='file' label='Pilih gambar untuk produk' onChange={this.imageProductName} multiple />
                                </div>
                            </div>
                        <span className="input-group pt-2 pb-2">Stock</span>
                        <div className='m-auto'>
                            <div className="input-group input-group-sm ">
                                <input value={this.props.adminEdit.stock<1?-(this.props.adminEdit.stock)+1:this.props.adminEdit.stock} onChange={(val)=>this.props.inputEditText('stock', val.target.value)} type="number" className="form-control" placeholder='Stock' />
                            </div>
                        </div>
                        <span className="input-group pt-2 pb-2">Harga</span>
                        <div className='m-auto'>
                            <div className="input-group input-group-sm ">
                                <input value={this.props.adminEdit.harga<1?-(this.props.adminEdit.harga)+1:this.props.adminEdit.harga} onChange={(val)=>this.props.inputEditText('harga', val.target.value)} type="number" className="form-control" placeholder='Harga' />
                            </div>
                        </div>
                                
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.onBtnPressAddProduct}>Simpan</Button>{' '}
                            <Button color="secondary" onClick={() => this.setState({ openModal: !this.state.openModal })}>Batal</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                {/* -----------------------End Modal Add Prdct--------------------------- */}
                <div className='h4 p-3'>Data Product Koperasi</div>
                <Button size='sm' color="danger" onClick={() => this.setState({ openModal: !this.state.openModal })}>Add Product</Button>
                <table className="shadow rounded p-5" >
                    <thead className='border p-1'>
                        <tr>
                            <th className='border' scope="col">No</th>
                            <th className='border' scope="col">Nama</th>
                            <th className='border' scope="col">Deskripsi</th>
                            <th className='border' scope="col">Gambar</th>
                            <th className='border' scope="col">Stock</th>
                            <th className='border' scope="col">Harga</th>
                            <th className='border' scope="col">Menu</th>
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
export default connect(sambungin, { getProduct, inputEditText, submitEdit, deleteProduct, addProduct, editProduct })(ManageMurid);