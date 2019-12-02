import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(){
    super();
    this.state={
      trombone_name:['TENOR TROMBONE','BASS TROMBONE','VALVE TROMBONE'],
      price:['$600','$900','$1200'],

    }
  }

  render(){
  return (
    <div>
      <div className="App">
        <div className="header">
          <i class="material-icons">
            menu
          </i>
          Original Trombones
        </div>
        <div className="header-content">
          <div>Features</div>
          <div>How it works</div>
          <div>Pricing</div>
        </div>
      </div>
      <div className="main_title">
        <div className="title">Handcrafted,home-made masterpieces</div>
        <div>
          <TextField
                placeholder= "Enter your email address"
                variant="outlined"
                style={{marginBottom:'20px'}}
          />  
        </div>
        <div className="start_button">
          <Button >GET STARTED</Button>
        </div>
        <div className="content_wrapper">
          <div className="content">
              <i class="material-icons" style={{fontSize: '40px'}}>
                whatshot
              </i>
              <div style={{marginLeft:'70px'}}>
                <div className="content_premium">Premium Materials</div>
                <div>Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</div>
              </div>
          </div>
          <div className="content">
            <i class="material-icons" style={{fontSize: '40px'}}>
              local_shipping
            </i>
            <div style={{marginLeft:'70px'}}>
              <div className="content_premium">Fast Shipping</div>
              <div>
                We make sure you receive your trombone as soon  as we have finished making it.
                We also provide free returns if  you are not satisfied.
              </div>
            </div>
          </div>
          <div className="content">
            <i class="material-icons" style={{fontSize: '40px'}}>
              battery_full
            </i>
            <div style={{marginLeft:'70px'}}>
            <div className="content_premium">Quality Assurance</div>
            <div>For every purchase you make, we will ensure there are no damages or faulyts and we will check and test the pitch of your instrument.</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={require('./images/trombone.png')} alt="thrombone" className="image"/>
      </div>
      <div className="trombone_comp">
        <div className="trombone_wrapper">
          <div className="trombone_title">
            TENOR TROMBONE
          </div>
            <div className="trombone_content">
              <div className="trombone_price">$600</div>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum dolor</p>
              <p>Lorem ipsum</p>
              <div className="select_button">
                <Button>SELECT</Button>
              </div>
            </div>
        </div>
        <div className="trombone_wrapper">
          <div className="trombone_title">
          BASS TROMBONE
          </div>
          <div className="trombone_content">
            <div className="trombone_price">$900</div>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum</p>
            <div className="select_button">
              <Button>SELECT</Button>
            </div>
          </div>
        </div>
        <div className="trombone_wrapper">
          <div className="trombone_title">
          VALVE TROMBONE
          </div>
          <div className="trombone_content">
            <div className="trombone_price">$1200</div>
            <p>plays similar to a Trumpet</p>
            <p>Great for Jazz Bands</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum</p>
            <div className="select_button">
              <Button>SELECT</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="fetures">
          <div>Privacy</div>
          <div>Terms</div>
          <div>Contact</div>
        </div>
        <div>Copyright2016,OriginalTrombones</div>
      </div>
    </div>
  );
}
}

export default App;
