import React, { Component } from 'react';
import { connect } from "react-redux";
class pageCart extends Component {
    state = {  }
    
    
    getdatauser=()=>{
        
    }
    
    render() { 

        return (
            <div>

            </div>
        );
    }
}
 
const sambungin=({user})=>{
    return {user}
}
export default connect (sambungin) (pageCart);