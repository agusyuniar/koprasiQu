import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
// import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import DataOrtu from '../components/adminComponent/manageOrtu';
import DataProduct from '../components/adminComponent/manageProduct';
import DataMurid from '../components/adminComponent/manageMurid';

class LoginPage extends Component {
    state = {
        activeTab: 0
    }

    render() {

        if(this.props.user.username!== 'admin'){
            return <Redirect to='/'/>
        }
        console.log(this.state);

        return (
            <div className=' m-auto p-5' style={{ backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
                <div className=''>
                    <h3 className='pl-4 align-left'><strong>Halo, Admin</strong></h3>
                    <div className='container-flex text-center'>
                        <div className='p-3 rounded' style={{ backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            <div className=''>
                                <div className='border rounded p-3 m-2'>
                                <div>
                                    <Nav tabs>
                                        <NavItem className='text-center'>
                                            <NavLink
                                                className={this.state.activeTab == 1 ? 'active btn-warning' : null}
                                                onClick={() => this.setState({ activeTab: '1' })}
                                            >
                                                Manage Orang Tua
                                            </NavLink>
                                        </NavItem>  
                                        <NavItem className='text-center'>
                                            <NavLink
                                                className={this.state.activeTab == 2 ? 'active btn-warning' : null}
                                                onClick={() => this.setState({ activeTab: '2' })}
                                            >
                                                Manage Murid
                                            </NavLink>
                                        </NavItem>  
                                        <NavItem>
                                            <NavLink
                                                className={this.state.activeTab == 3 ? 'active btn-warning' : null}
                                                onClick={() => this.setState({ activeTab: '3' })}
                                            >
                                                Manage Produk
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col>
                                                    <DataOrtu />
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col>
                                                    <DataMurid />
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col>
                                                    <DataProduct />
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const sambungin = ({ user, adminEdit }) => {
    return { user, adminEdit }
}
export default connect(sambungin)(LoginPage);