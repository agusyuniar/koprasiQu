import React, { Component } from 'react';
import { connect } from "react-redux";
import { API_URL_1 } from "../helpers/apiurl";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, Button, Link} from '@material-ui/core/';
import Swal from 'sweetalert2'
import { getCartbyParent, deleteCartbyID } from "../redux/action";

class CheckoutSummary extends Component {

    state = {
        totalHarga:0,
        metodeBayar:'',
        transactionID:'',
        virtualRek:''
    }
    
    componentDidMount(){
        this.props.getCartbyParent(this.props.user.id)
        this.makeTRXid()
        this.makeVirtualRek()
    }


    
    hitungTotalBelanja=()=>{
        var totalHarga = 0
        for(var i=0; i<this.props.productReducer.listCart.length; i++){
            totalHarga += (this.props.productReducer.listCart[i].harga)
        }
        console.log(totalHarga);
        this.state.totalHarga=totalHarga
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
                    <TableCell  scope="row" align="center">
                            {item.id_murid}
                    </TableCell>
                    <TableCell scope="row" align="center">
                        {item.nama_product}
                    </TableCell>
                    <TableCell  scope="row" align="center">
                        Rp {(item.harga/item.total).toLocaleString()}
                    </TableCell>
                    <TableCell  scope="row" align="center">
                        {item.total}
                    </TableCell>
                    <TableCell  scope="row" align="center">
                        Rp {item.harga.toLocaleString()}
                    </TableCell>
                    
                    {/* <TableCell  scope="row">
                        <a onClick={()=>this.onPressDeleteCart(item.id)}><ClearRoundedIcon/></a>
                    </TableCell> */}
                </TableRow>
                    // {item.total}
                    // {item.harga}
            )
        })
    }

        
    makeTRXid=()=>{
        var result = '';
        // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) { //pjg string
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({transactionID: 'TRX-'+result})
        // return result;
    }
    makeVirtualRek=()=>{
        var result = '';
        // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 17; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({virtualRek: result})
    }

    onBtnPressMakeOrder=()=>{
        
        if(this.state.metodeBayar==='--Pilih Metode--' || !this.state.metodeBayar){
            return Swal.fire('Metode pembayaran belum dipilih')
        }

        // this.makeTRXid()
        // this.makeVirtualRek()

        var va = this.state.virtualRek
        var trx_id = this.state.transactionID
        var method = this.state.metodeBayar
        var id_ortu = this.props.user.id
        Axios.put(API_URL_1+`/product/checkoutOrder`,{va,trx_id,method, id_ortu})
        .then(res=>{
            console.log('berhasil membuat pesanan')
            Swal.fire({
                title: 'Terimakasih',
                text: 'Pesanan anda telah dibuat, silakan melakukan pembayaran',
                html:   `No Virtual Account : ${trx_id} <br/>
                        Total Pembayaran : Rp ${this.state.totalHarga.toLocaleString()} <br/>
                        Metode Pembayaran : ${method}`,
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Oke'
            }).then((result) => {
                window.location.reload()
                if (result.value) {
                }
            })
        })
        .catch(err=>{console.log('gagal membuat pesanan',err)})
        
    }

    render() { 
        // console.log(this.props.user.email)
        console.log(this.state.metodeBayar);
        console.log(this.state.transactionID);
        console.log(this.state.virtualRek);
       
        
        return (
            <div className=' m-auto text-center p-5' style={{ backgroundImage: 'linear-gradient(to bottom, #dfe9f3 0%, white 100%)' }}>
                <div className=''>
                    <div className='container-flex p-5'>
                        <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            <div className='h5'>Rangkuman belanja anda sebagai berikut : </div>
                            {
                                this.props.productReducer.listCart.length===0 ? 'Cart masih kosong, silakan pilih barang terlebih dahulu' :
                            
                            <TableContainer component={Paper}>
                                <Table className aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">ID NIM Anak</TableCell>
                                            <TableCell align="center">Nama</TableCell>
                                            <TableCell align="center">Harga Satuan</TableCell>
                                            <TableCell align="center">Kuantitas</TableCell>
                                            <TableCell align="center">Total Harga</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.renderCart()}
                                    </TableBody>
                                    <TableFooter>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center">
                                            {this.hitungTotalBelanja()}
                                            <div className='h5'>Total : Rp {this.state.totalHarga.toLocaleString()}</div>
                                        </TableCell>
                                    </TableFooter>
                                </Table>
                                <div style={{border:'1px solid teal', borderRadius:'10px', padding:'5px auto', margin: '20px auto', width:'30%'}}>
                                        <div>
                                            <p>
                                                Pilih Metode Pembayaran
                                                </p>
                                        </div>
                                        <div className='pb-2'>
                                            <select onChange={(e)=>this.setState({metodeBayar: e.target.value})}>
                                                <option>--Pilih Metode--</option>
                                                <option value='Bank Transfer'>Bank Transfer</option>
                                                <option value='Saldo' disabled>Saldo (comingsoon)</option>
                                            </select>
                                        </div>

                                </div>
                            </TableContainer>
                            }
                                        <div className='m-auto p-2'>
                                            <Button onClick={this.onBtnPressMakeOrder} style={{color:'orange',border:'1px solid teal'}}> 
                                                Buat Pesanan
                                            </Button>
                                        </div>
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
export default connect (sambungin, {getCartbyParent, deleteCartbyID}) (CheckoutSummary);