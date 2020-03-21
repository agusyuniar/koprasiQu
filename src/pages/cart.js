import React, { Component } from 'react';
import { connect } from "react-redux";
import { API_URL_1 } from "../helpers/apiurl";
import Axios from "axios";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, Button, Tooltip} from '@material-ui/core/';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { getCartbyParent, deleteCartbyID, CartCheckout } from "../redux/action";
import { Link } from "react-router-dom";

class pageCart extends Component {

    state = {
        datamurid:[],
        totalHarga:0,
        selectedMurid:[]
    }
    
    componentDidMount(){
        this.getdatamurid()
        this.props.getCartbyParent(this.props.user.id)
    }

    getdatamurid=()=>{
        
        Axios.get(API_URL_1+`/user/studentbyparent/${this.props.user.email}`)
        .then(res=>{
            this.setState({datamurid:res.data})
        })
        .catch(err=>{console.log('gagal ambil data murid') })
    }
    
    hitungTotalBelanja=()=>{
        var totalHarga = 0
        for(var i=0; i<this.props.productReducer.listCart.length; i++){
            totalHarga += (this.props.productReducer.listCart[i].harga)
        }

        console.log(totalHarga);
        this.state.totalHarga=totalHarga
        // return
    }
    renderCart=()=>{
        // this.props.getCartbyParent(this.props.user.id)

        if(!this.props.productReducer.listCart){
            return 'Cart masih kosong'
        }
        return this.props.productReducer.listCart.map((item,index)=>{
            console.log(item);
            // this.state.totalHarga += (item.harga)
            return (
                <TableRow key={index}>
                    <TableCell scope="row">
                        {item.nama_product}
                    </TableCell>
                    <TableCell  align="center" scope="row">
                    Rp {(item.harga/item.total).toLocaleString()}
                    </TableCell>
                    <TableCell align="center"  scope="row">
                        {item.total}
                        {/* <input type='number' defaultValue={item.total} onChange={(val)=>this.props.CartCheckout(this.state.datamurid,val.target.value,item.product_id,this.props.user.id)}/> */}
                    </TableCell>
                    <TableCell align="center"  scope="row">
                    Rp {item.harga.toLocaleString()}
                    </TableCell>
                    <TableCell align="center"  scope="row">
                        {/* <select onChange={(e)=>this.setState({selectedMurid:e.target.value+' '+item.id})} className='custom-select'> */}
                        <select onChange={(e)=>this.props.CartCheckout(e.target.value,item.product_id,this.props.user.id)} className='custom-select'>
                            <option>{item.id_murid ? 'NIM : '+item.id_murid : 'Pilih murid'}</option>
                            {
                                this.state.datamurid.map((murid)=>{
                                    return (
                                        <Tooltip title={'NIM : '+murid.nim}>
                                            <option value={murid.nim}>{murid.firstname+' '+murid.lastname}</option>
                                        </Tooltip>
                                    )
                                })
                            }
                        </select>
                    </TableCell>
                    <TableCell align="center"  scope="row">
                        <a onClick={()=>this.onPressDeleteCart(item.id)}><ClearRoundedIcon/></a>
                    </TableCell>
                </TableRow>
                    // {item.total}
                    // {item.harga}
            )
        })
    }

    onPressDeleteCart=(id)=>{
        this.props.deleteCartbyID(id)
        this.props.getCartbyParent(this.props.user.id)
        this.props.getCartbyParent(this.props.user.id)

    }

    onBtnCheckOut=()=>{

    }

    render() { 
        console.log(this.props.user.email)
        console.log(this.state.selectedMurid);
       
        
        return (
            <div className=' m-auto text-center p-5' style={{ backgroundImage: 'linear-gradient(to bottom, #dfe9f3 0%, white 100%)' }}>
                <div className=''>
                    <div className='container-flex p-5'>
                        <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            <div className='h5'>Keranjang belanja anda sebagai berikut : </div>
                            {
                                this.props.productReducer.listCart.length===0 ? 'Cart masih kosong, silakan pilih barang terlebih dahulu' :
                            
                            <TableContainer component={Paper}>
                                <Table className aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nama</TableCell>
                                            <TableCell align="center">Harga Satuan</TableCell>
                                            <TableCell align="center">Kuantitas</TableCell>
                                            <TableCell align="center">Total Harga</TableCell>
                                            <TableCell align="center">Nama Anak</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.renderCart()}
                                    </TableBody>
                                            <TableFooter>
                                                <TableCell align="center"></TableCell>
                                                <TableCell align="center"></TableCell>
                                                <TableCell align="center"></TableCell>
                                                <TableCell align="center">
                                                    {this.hitungTotalBelanja()}
                                                    <div className='h5'>Total : Rp {this.state.totalHarga.toLocaleString()}</div>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button color='secondary'>
                                                        <Link to='/checkout'>
                                                            Check Out
                                                        </Link>
                                                    </Button>
                                                </TableCell>
                                            </TableFooter>
                                </Table>
                            </TableContainer>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
const sambungin=({user, productReducer})=>{
    return {user, productReducer}
}
export default connect (sambungin, {getCartbyParent, deleteCartbyID, CartCheckout}) (pageCart);