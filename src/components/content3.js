import React, { Component } from 'react';


class ParentFeature extends Component {
    state = {}
    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(180deg, #f5f7fa 0%, #c3cfe2 100%)"}}>
                <div className='row sec3'>
                        <div className='col-6 m-3 m-auto'>
                            <h4 className='mb-5'>6 Keuntungan menggunakan koperasiQu</h4>

                            <div className='row sec3-content mb-3'>
                                <div className='col-11 m-auto'>
                                    <p className='m-auto'>Pantau pengeluaran anak secara realtime</p>
                                </div>
                                <div className='col-1'>
                                    <img src={require('../img/coin.PNG')} alt='benefit' />
                                </div>
                            </div>
                            <div className='row sec3-content mb-3'>
                                <div className='col-11 m-auto'>
                                    <p className='m-auto'>Periksa data administrasi sekolah anak dengan mudah</p>
                                </div>
                                <div className='col-1'>
                                    <img src={require('../img/adminData.PNG')} alt='benefit' />
                                </div>
                            </div>
                            <div className='row sec3-content mb-3'>
                                <div className='col-11 m-auto'>
                                    <p className='m-auto'>Keamanan lebih dengan menggunakan uang digital</p>
                                </div>
                                <div className='col-1'>
                                    <img src={require('../img/emoney.PNG')} alt='benefit' />
                                </div>
                            </div>
                            <div className='row sec3-content mb-3'>
                                <div className='col-11 m-auto'>
                                    <p className='m-auto'>Hemat waktu dengan belanja kebutuhan anak darimana saja</p>
                                </div>
                                <div className='col-1'>
                                    <img src={require('../img/trolleycolor.PNG')} alt='benefit' />
                                </div>
                            </div>
                            <div className='row sec3-content mb-3'>
                                <div className='col-11 m-auto'>
                                    <p className='m-auto'>Dapatkan laporan belanja setiap bulan</p>
                                </div>
                                <div className='col-1'>
                                    <img src={require('../img/report.png')} alt='benefit' />
                                </div>
                            </div>
                            <div className='row sec3-content mb-3'>
                                <div className='col-11 m-auto'>
                                    <p className='m-auto'>Atur uang saku anak secara mudah dan efisien</p>
                                </div>
                                <div className='col-1'>
                                    <img src={require('../img/wallet.png')} alt='benefit' />
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-5 m-3'>
                        <img src={require('../img/reportOrtu.PNG')} alt='benefit' width='600' />
                        </div>
                    </div>
            </div>
        );
    }
}

export default ParentFeature;