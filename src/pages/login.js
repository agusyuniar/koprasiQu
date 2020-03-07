import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Ortu from '../components/loginOrtu'
import Murid from '../components/loginMurid'

class LoginPage extends Component {
    state = {
        parent: false,
        student: false
    }

    btnAct = () => {
        // this.setState({ redirect: true });
    }

    render() {
        
        
        if(this.props.user.id){
            return <Redirect to="/profile" />
        }
        if (this.state.parent) {
            return <Redirect push to="/parent" />;
        } else if (this.state.student) {
            return <Redirect push to="/student" />;
        }
        
        return (
            <div className=' m-auto text-center p-5' style={{ backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
                <div className='bg'>
                    <div className='container p-5'>
                        <div className='p-5' style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, .8)' }}>
                            <h3 className='p-5'><strong>Ingin login sebagai ?</strong></h3>
                            <ButtonGroup aria-label="contained primary button group" size='small' className='mb-5'>
                                <Button
                                    onClick={() => this.setState({ parent: true })}
                                    style={{
                                        backgroundImage: 'linear-gradient(to bottom,  #d4fc79 0%, #96e6a1 100%)',
                                        color: 'black',
                                        padding: '10px 20px 10px 20px',
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                        boxShadow: '3px 7px 7px grey'
                                    }}
                                >
                                    Orangtua
                                </Button>
                                <Button
                                    onClick={() => this.setState({ student: true })}
                                    style={{
                                        backgroundImage: 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
                                        // backgroundColor: 'black', 
                                        padding: '10px 35px 10px 35px',
                                        borderTopRightRadius: '10px',
                                        borderBottomRightRadius: '10px',
                                        boxShadow: '3px 7px 7px grey'
                                    }}
                                >
                                    Murid
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const sambungin = ({user})=> {
    return {user}
}
export default connect (sambungin) (LoginPage);