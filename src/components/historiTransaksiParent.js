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
                    <td><strong>{item.transaction_id}</strong></td>
                    <td><strong>{item.transaction_time}</strong></td>
                    <td>{item.nama_product}</td>
                    <td>{item.total}</td>
                    <td>Rp {item.harga.toLocaleString()}</td>
                    <td>{item.id_murid}</td>
                    <td>{item.paid===0 ? '  belum bayar  ' : '  lunas  '}</td>
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
                <table className='text-center'>
                    <thead>
                        <tr>
                            <td className='pr-1 pl-1'>No </td>
                            <td className='pr-1 pl-1'>ID Transaksi</td>
                            <td className='pr-1 pl-1'>Tanggal Transaksi</td>
                            <td className='pr-1 pl-1'>Nama Barang </td>
                            <td className='pr-1 pl-1'>Kuantitas </td>
                            <td className='pr-1 pl-1'>Harga </td>
                            <td className='pr-1 pl-1'>NIM Murid</td>
                            <td className='pr-1 pl-1'>Status</td>
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