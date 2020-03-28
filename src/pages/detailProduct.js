import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProductByID } from "../redux/action";
import { API_URL_1 } from "../helpers/apiurl";
import { Redirect } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
// import {Button} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ImageGallery from 'react-image-gallery';
import Axios from 'axios';


class detailProduct extends Component {
    state = {
        image : [],
        activeTab : 0,
        total : 1
    }


    componentDidMount() {
        this.renderDetailProduct()
        // let id = this.props.location.search.split('=')[1];
        // Axios.get(API_URL_1+`/product/getProductByID/${id}`)
        // .then(res=>{
        //     console.log(res.data[0]);
        //     this.setState({data:res.data[0]})
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    }
    renderDetailProduct=()=>{
        let id = this.props.location.search.split('=')[1];
        this.props.getProductByID(id)
    }

    renderImagesProduct=()=>{
        if(!this.props.productReducer.productDetail.images){
            return 'kosong'
        }
        
        return (
            <tr>
                {
                    this.props.productReducer.productDetail.images.map((item, index) => {
                        return (
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId={index}>
                                    <a href={API_URL_1+item.img}><img src={API_URL_1+item.img} width='250px' className='border rounded' /></a>
                                </TabPane>
                            </TabContent>
                        )
                    })
                }
                <td className='align-top'>
                    {
                        this.props.productReducer.productDetail.images.map((item, index) => {
                            return (
                                <Nav>
                                    <NavItem>
                                        <NavLink onClick={() => this.setState({ activeTab: index })}>
                                            <img src={API_URL_1 + item.img} width='60px' className='border rounded' />
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            )
                        })
                    }
                </td>
            </tr>
            )
    }

    renderstock=()=>{
        var {stock}=this.props.productReducer.productDetail
        if(stock<1){
            return 'kosong'
        }else if(stock>=50&&stock<150){
            return 'tersedia > 50 '
        }else{
            return 'tersedia > 150'
        }
    }

    onPressBuy=()=>{
        var {id,nama_product,harga}=this.props.productReducer.productDetail
        harga = harga*(this.state.total)
        Axios.post(API_URL_1+`/product/addParentCart`,{
            product_id:id,
            nama_product,
            total:this.state.total,
            harga,
            id_ortu:this.props.user.id
        })
        .then(res=>{
            console.log('berhasil tambah cart');
            window.location('/cart')
        })
        .catch(err=>{
            console.log('gagal tambah cart ortu');
        })
    }
    

    onPressAddCart=()=>{
        var {id,nama_product,harga}=this.props.productReducer.productDetail
        harga = harga*(this.state.total)
        Axios.post(API_URL_1+`/product/addParentCart`,{
            product_id:id,
            nama_product,
            total:this.state.total,
            harga,
            id_ortu:this.props.user.id
        })
        .then(res=>{
            console.log('berhasil tambah cart');
        })
        .catch(err=>{
            console.log('gagal tambah cart ortu');
        })
    }

    render() {
        console.log(this.props.productReducer.productDetail);
        
        console.log(this.props.productReducer.productDetail.nama_product);
        var {id,nama_product,deskripsi,stock,harga, images}=this.props.productReducer.productDetail
        console.log(this.state.activeTab);

        if(!localStorage.getItem('ptoken')){
            return <Redirect to='*'/>
        }

        return (
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #dfe9f3 0%, white 100%)' }}>
                
                <div className='container p-3'>
                    <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .7)' }}>
                        <div className='row'>
                            <div className='col-4'>
                                <div>
                                    {this.renderImagesProduct()}
                                </div>
                                <div className='mt-4 '>
                                    <a onClick={this.onPressAddCart} className='border p-3 ml-3' style={{color:'orange',fontWeight:700, borderRadius:'10px'}}><AddShoppingCartIcon/></a>
                                    <a onClick={this.onPressBuy} className='border p-3 ml-4' style={{color:'green',fontWeight:700, borderRadius:'10px'}}>Beli Sekarang</a>
                                </div>
                            </div>
                            <div className='col border-left ml-2'>
                                <div className='h2 pb-2 border-bottom'>{nama_product}</div>
                                <div className='pt-4 pb-4'>

                                <tr>
                                    <td className='pr-5 pb-3'>Harga</td>
                                    <td className='h4'>Rp {parseInt(harga).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className='pb-3'>Stock</td>
                                    <td>{
                                        this.renderstock()
                                    }</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className=''>
                                        {/* <AddCircleOutlineOutlinedIcon  fontSize='small'/> */}
                                        <TextField
                                            type="number"
                                            value={this.state.total}
                                            onChange={(val)=>this.setState({total:val.target.value})}
                                            style={{width:'35px',margin:'0 10px 0 10px', WebkitAppearance:'none'}}
                                        />
                                        {/* <RemoveCircleOutlineOutlinedIcon  fontSize='small'/> */}
                                        <span style={{fontSize:'10pt'}}> min. pembelian 1 pcs</span>
                                    </td>
                                </tr>
                                </div>
                                <div className='border-bottom h5'>Deskripsi</div>
                                <div className='rounded border' style={{padding:'5px 0 300px 5px'}}><strong>{deskripsi}</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const sambungin = ({ productReducer,user }) => {
    return { productReducer,user }
}
export default connect(sambungin, { getProductByID })(detailProduct);