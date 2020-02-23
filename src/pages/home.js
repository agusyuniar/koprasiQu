import React, { Component } from 'react';
import Jumbo from '../components/intro'
import Content1 from '../components/content1'
import Content2 from '../components/content2'
import Content3 from '../components/content3'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Jumbo/>
            <Content1/>
            <Content2/>
            <Content3/>
        </div> 
        );
    }
}
 
export default Home;