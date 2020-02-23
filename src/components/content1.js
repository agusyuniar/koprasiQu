import React, { Component } from 'react';


class Intro1 extends Component {
    state = {}
    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(to top, #fbdfa1 0%, #dbf8fa 60%)"}}>
                <div className='row sec1 '>
                    <div className='col-6'>
                        <img src={require('../img/student.png')} alt='feature' width='500px' className='float-right' />
                    </div>
                    <div className='col-6 m-auto'>
                        <h4 className='mb-5'>3 Langkah mudah menggunakan koperasiQu</h4>
                        {/* isi */}
                        <div className='row align-left mb-3'>
                            <div className='col-1'>
                                <img src={require('../img/login.png')} alt='feature' width='40px' className='float-left align-middle' />
                            </div>
                            <div className='col-11 align-left'>
                                <p>Login koperasiQu untuk memeriksa sisa saldo kamu</p>
                            </div>
                        </div>
                        <div className='row align-left mb-3'>
                            <div className='col-1 '>
                                <img src={require('../img/id siswa.png')} alt='feature' width='40px' className='float-left align-middle' />
                            </div>
                            <div className='col-11 align-left'>
                                <p>Selalu gunakan ID dan PIN untuk melakukan transaksi di Koperasi dan Kantin</p>
                            </div>
                        </div>
                        <div className='row align-left mb-3'>
                            <div className='col-1 '>
                                <img src={require('../img/deal.png')} alt='feature' width='40px' className='float-left align-middle' />
                            </div>
                            <div className='col-11 align-left'>
                                <p>Gunakan koperasiQu dengan bijak sesuai dengan kebutuhanmu</p>
                            </div>
                            {/* akhir isi */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro1;