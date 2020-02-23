import React, { Component } from 'react';
import './footer.scss'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="pt-5 pb-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                        
                            <h2 className='teal-text'>
                            <img src={require('../img/icon.png')} height='50' alt='logo'/>
                                KoperasiQu
                                </h2>
                            {/* <p className="pr-5 text-white-50 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p> */}
                            <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">Sitemap</h4>
                            <ul className="m-0 p-0">
                                <li>- <a href="#">Lorem ipsum</a></li>
                                <li>- <a href="#">Nam mauris velit</a></li>
                                <li>- <a href="#">Etiam vitae mauris</a></li>
                                <li>- <a href="#">Fusce scelerisque</a></li>
                                <li>- <a href="#">Sed faucibus</a></li>
                                <li>- <a href="#">Mauris efficitur nulla</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                            <p>BSD Green Office Park GOP 9 - G Floor, BSD City Tangerang Banten</p>
                            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(021) 1234-56789</p>
                            <p><i className="fa fa-envelope-o mr-3"></i>info@mail.com</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;