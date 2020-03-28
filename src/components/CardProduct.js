import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from "react-redux";
import { getProduct, getProductByPilihanCategory, searchProductbyName } from "../redux/action";
import { API_URL_1 } from "../helpers/apiurl";

class CardProduct extends Component {
    state = {
        listProductCategory:[]
    }

    componentDidMount() {
        this.props.getProduct()
        this.props.searchProductbyName(this.props.productReducer.inputSearch)
        
        this.props.getProductByPilihanCategory()
        // this.props.searchProductbyName(this.props.productReducer.inputSearch)
    }
    
    
    renderCardProduct = () => {
        if(this.props.productReducer.inputSearch !== ''){
            this.props.productReducer.selectedCategory=null
            return this.props.productReducer.listProductSearch.map((item) => {
                console.log(item.images);
                
                var images = JSON.parse(item.images)
                if(images[0].img===null){
                    images[0].img = '/image/product/default/default.jpg'
                }
                return (
                    <Card 
                        style={{
                            backgroundImage: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
                            maxWidth: '20%', 
                            margin: 10 }}
                        className=''
                    >
                        <Link to={`/details?id=${item.id}`}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="productIMG"
                                height="140"
                                image={API_URL_1+images[0].img}
                                title={item.nama_product}
                            />
                        </CardActionArea>
                        </Link>
                            <CardContent>
                                <div className='pb-1 mb-1 border-bottom'>
                                    <a className='h6'>
                                        {item.nama_product}
                                    </a>
                                </div>
                                <div variant="body2" color="textSecondary" component="p" title={item.deskripsi}>
                                    {item.deskripsi.toString().slice(0,40)+'...'}
                                        </div>
                            </CardContent>
                    </Card>
                )
                    })
        }
        
        if(this.props.categoryReducer.selectedCategory){
            var hasilfilter =  this.props.categoryReducer.listProductCategory.filter((item) => {
            console.log(item)
            
            return item.categoryId === parseInt(this.props.categoryReducer.selectedCategory)
                })

            return hasilfilter.map((item)=>{
                return (
                        <Card 
                        style={{
                            backgroundImage: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
                            maxWidth: '20%', 
                            margin: 10 }}
                        className=''
                        >
                        <Link to={`/details?id=${item.id}`}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="ProductIMG"
                                height="140"
                                image={API_URL_1+item.img_path}
                                title={item.nama_product}
                            />
                        </CardActionArea>
                        </Link>
                            <CardContent>
                                <div className='pb-1 mb-1 border-bottom'>
                                    <a className='h6'>
                                        {item.nama_product}
                                    </a>
                                </div>
                                <div variant="body2" color="textSecondary" component="p" >
                                    {/* {item.deskripsi.toString().slice(0,40)+'...'} */}
                                        </div>
                            </CardContent>
                    </Card>
                    
                )
            })
            console.log('hasilfilter: ',hasilfilter);
            
            

            // console.log(item.id);
            
            // console.log(categorymap);
            
        }

        return this.props.productReducer.listProduct.map((item) => {
            var images = JSON.parse(item.images)
            if(images[0].img===null){
                images[0].img = '/image/product/default/default.jpg'
            }
            // console.log(images[0]);
            // console.log(API_URL_1,'/public',images[0].img);
            var img_path = `${API_URL_1+`/public`+images[0].img}`
            // console.log(img_path);
            
            return (
                <Card 
                    style={{
                        backgroundImage: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
                        maxWidth: '20%', 
                        margin: 10 }}
                    className=''
                >
                    <Link to={`/details?id=${item.id}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={API_URL_1+images[0].img}
                            title={item.nama_product}
                        />
                    </CardActionArea>
                    </Link>
                        <CardContent>
                            <div className='pb-1 mb-1 border-bottom'>
                                <a className='h6'>
                                    {item.nama_product}
                                </a>
                            </div>
                            <div variant="body2" color="textSecondary" component="p" title={item.deskripsi}>
                                {item.deskripsi.toString().slice(0,40)+'...'}
                                    </div>
                        </CardContent>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                                </Button>
                        <Button size="small" color="primary">
                            Learn More
                                </Button>
                    </CardActions> */}
                </Card>
            )
        
                
            
    })
}


render() {
    console.log('dari card: ',this.props.productReducer);
    console.log(this.props.categoryReducer);
    

    return (
        <div className='row'>
            {this.renderCardProduct()}
        </div>
    );
}
}

const sambungin = ({ productReducer, categoryReducer }) => {
    return { productReducer,categoryReducer }
}
export default connect(sambungin, { getProduct, getProductByPilihanCategory, searchProductbyName })(CardProduct);