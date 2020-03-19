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
import { getProduct } from "../redux/action";
import { API_URL_1 } from "../helpers/apiurl";

class CardProduct extends Component {
    state = {}

    componentDidMount() {
        this.props.getProduct()
    }

    renderCardProduct = () => {
        return this.props.productReducer.listProduct.map((item) => {
            var images = JSON.parse(item.images)
            console.log(images[0]);
            console.log(API_URL_1,'/public',images[0].img);
            var img_path = `${API_URL_1+`/public`+images[0].img}`
            console.log(img_path);
            
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
    console.log(this.props.productReducer);


    return (
        <div className='row'>
            {this.renderCardProduct()}
        </div>
    );
}
}

const sambungin = ({ productReducer }) => {
    return { productReducer }
}
export default connect(sambungin, { getProduct })(CardProduct);