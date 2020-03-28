import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ManageCagetgory from "./manageCategory";
import ManageCatProduct from "./manageCatProduct";

class CategoryPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem className='text-center'>
                        <NavLink
                            className={this.state.activeTab == 1 ? 'active btn-warning' : null}
                            onClick={() => this.setState({ activeTab: '1' })}
                        >
                            Manage Category
                         </NavLink>
                    </NavItem>
                    <NavItem className='text-center'>
                        <NavLink
                            className={this.state.activeTab == 2 ? 'active btn-warning' : null}
                            onClick={() => this.setState({ activeTab: '2' })}
                        >
                            Manage Product+Category
                                            </NavLink>
                    </NavItem>
                    
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>
                                Category manager
                            <ManageCagetgory/>

                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                ProductCategory manager
                                <ManageCatProduct/>
                            </Col>
                        </Row>
                    </TabPane>
                    
                </TabContent>
            </div>
        );
    }
}

export default CategoryPage;