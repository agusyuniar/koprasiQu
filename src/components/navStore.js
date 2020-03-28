import React, { Component } from 'react';
import { Button } from "reactstrap";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { API_URL_1 } from "../helpers/apiurl";
import axios from "axios";
import { connect } from "react-redux";
import { getProductCatbyCategoryID, pilihanCategory, searchProductbyName, inputSearch } from "../redux/action";

class NavStore extends Component {
    state = {
        listProductCategory: []
    }

    componentDidMount() {
        this.getCategoryList()
    }

    getCategoryList = () => {
        axios.get(API_URL_1 + '/category/getallleaf')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    listProductCategory: res.data
                })
            }).catch((err) => {
                console.log(err.response)
            })
    }

    renderCategoryList = () => {
        return this.state.listProductCategory.map((item, index) => {
            console.log(item);

            return (
                <option value={item.id}>{item.category}</option>
            )
        })
    }

    selectgetProductCatbyCategoryID=(id)=>{
        console.log(id);
        this.props.getProductCatbyCategoryID(id)
    }

    searchProductbyName=(val)=>{
        console.log(val);
        this.props.inputSearch(val)
        this.props.searchProductbyName(val)
    }
    render() {

        // console.log(this.state.listProductCategory)
        console.log(this.props.productReducer);

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>

                    <a className="navbar-brand" href="#">KoprasiQu Online Stall</a>
                    <Divider style={{ height: 28, margin: 15, }} orientation="vertical" />

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <Divider style={{ height: 28, margin: 15, marginRight:30}} orientation="vertical" /> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item">
                                <div className="nav-link" href="#">Kategori : <span className="sr-only"></span></div>
                            </li> */}
                            {/* <Divider style={{ height: 28, margin: 15, marginRight:30}} orientation="vertical" /> */}

                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Category
                            </a> */}
                                <select
                                    className='nav-link dropdown-toggle'
                                    // value={this.props.categoryReducer.listProductCategory}
                                    onChange={(e) => this.props.pilihanCategory(e.target.value)}
                                >
                                    <option value={''}>-- Pilih Category --</option>
                                    {this.renderCategoryList()}
                                </select>
                            </li>
                        </ul>
                        <Divider style={{ height: 28, margin: 15, marginRight: 30 }} orientation="vertical" />

                        <form className="form-inline my-2 my-lg-0">
                            <div
                                className='float-right m-auto'
                                component="form"
                                style={{
                                    // padding: '2px 4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                }}>
                                {/* <IconButton className aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}

                                <InputBase
                                    style={{ width: '30vw' }}
                                    placeholder="Cari barang yang sesuai"
                                    // value={this.props.productReducer.listProduct}
                                    onChange={(e)=>this.searchProductbyName(e.target.value)}
                                />
                                <Divider style={{ height: 28, margin: 4, }} orientation="vertical" />
                                <IconButton type="submit" className aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

const sambungin = ({ categoryReducer, productReducer }) => {
    return { categoryReducer,productReducer }
}
export default connect(sambungin, { getProductCatbyCategoryID, pilihanCategory, searchProductbyName, inputSearch })(NavStore);