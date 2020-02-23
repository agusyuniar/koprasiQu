import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Button from '@material-ui/core/Button';

const Jumbooo = (props) => {
  return (
    <div>
      <Jumbotron fluid className='jumbotron'>
        {/* <MDBView className='img-fluid   pt-5' src={require(`../img/jumbotron_img.jpg`)}> */}
        <Container fluid>
          {/* <h1 className="display-6">Fluid jumbotron</h1> */}
          <p className="display-6 ">Selamat datang di <span>koperasiQu</span><br />
            tempat belanja <span>nyaman</span> bagi keluarga besar SD Bina Cerdas
          </p>
          <p className="lead ">
            Koperasi dan kebutuhan sekolah yang <span>terintegrasi</span><br />
            antara orang tua dan murid.<br />
            Kapanpun dan dimanapun</p>

          <Button to={require('./content1')} className='btn tombol-start'>Pelajari</Button>
        </Container>
      </Jumbotron>

      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-5 top-feature'>
            <div className='row'>
              <div className='col-lg'>
                <img src={require('../img/hand-help.png')} alt='feature' width='130px' className='float-left' />
                <h5>NYAMAN</h5>
                <p>Membeli kebutuhan siswa dengan rasa nyaman dan aman. Orang tua dapat memantau pengeluaran anak dari manapun dan kapanpun.</p>
              </div>
            </div>
          </div>

          <div className='col-5 top-feature'>
            <div className='row'>
              <div className='col-lg'>
                <img src={require('../img/trolley.png')} alt='feature' width='130px' className='float-left' />
                <h5>TERINTEGRASI</h5>
                <p>Koperasi dan Kantin sekolah pertama yang terintegrasi langsung dengan orangtua dan siswa. Membeli kebutuhan siswa dengan praktis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div className='row justify-content-center d-flex sec1 pt-5'>
          <div className='col-6'>
            <img src={require('../img/student.png')} alt='feature' width='500px' className='float-right' />
          </div>
          <div className='col-6 m-auto'>
            <h4 className='mb-5'><strong>3 Langkah mudah menggunakan koperasiQu</strong></h4>
           

            <div className='row align-left mb-3'>
              <div className='col-1'>
                <img src={require('../img/login.png')} alt='feature' width='40px' className='m-auto' />
              </div>
              <div className='col-11 align-left'>
                <p>Login koperasiQu untuk memeriksa sisa saldo kamu</p>
              </div>
            </div>
            <div className='row align-left mb-3'>
              <div className='col-1 '>
                <img src={require('../img/id siswa.png')} alt='feature' width='40px' className='float-left mr-2 align-middle' />
              </div>
              <div className='col-11 align-left'>
                <p>Selalu gunakan ID dan PIN untuk melakukan transaksi di Koperasi dan Kantin</p>
              </div>
            </div>
            <div className='row align-left mb-3'>
              <div className='col-1 '>
                <img src={require('../img/deal.png')} alt='feature' width='40px' className='float-left mr-2 align-middle' />
              </div>
              <div className='col-11 align-left'>
                <p>Gunakan koperasiQu dengan bijak sesuai dengan kebutuhanmu</p>
              </div>


              </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Jumbooo;