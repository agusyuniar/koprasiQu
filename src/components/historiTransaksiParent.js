import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getTransaction } from "../redux/action";
class HistoriTransaksi extends Component {
    state = { 
        transaction_id : null,
        transaction_time : [],
        va : [],
     }
    
    componentDidMount(){
        this.props.getTransaction(this.props.user.id)
    }
    
    renderTransaksi=()=>{
        return this.props.productReducer.listTransaction.map((item,index)=>{
            console.log(item);
            // this.setState({va:item.virtualaccount})
            // this.setState({transaction_time:item.transaction_time})
            this.state.transaction_id = item.transaction_id
            this.state.transaction_time = item.transaction_time
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.nama_product}</td>
                    <td>{item.total}</td>
                    <td>Rp {item.harga.toLocaleString()}</td>
                </tr>

               
            )
        })
    }

    render() { 
        console.log(this.props.productReducer)
        console.log(this.state.transaction_id);
        
        return (
            <div className='container border rounded p-1 mt-5'>
                <div className='h5'>
                    Histori Transaksi
                </div>
                <div className='h6'> id : {this.state.transaction_id}</div>
                <div className='h6'> tanggal transaksi : {this.state.transaction_time}</div>
                <table className='text-center'>
                    <thead>
                        <tr>
                            <td>No </td>
                            <td>Nama Barang </td>
                            <td>Kuantitas </td>
                            <td>Harga </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTransaksi()}
                    </tbody>
                </table>
                
            </div>
        );
    }
}
 
const sambungin=({user,productReducer})=>{
    return {user,productReducer}
}
export default connect (sambungin,{getTransaction}) (HistoriTransaksi);