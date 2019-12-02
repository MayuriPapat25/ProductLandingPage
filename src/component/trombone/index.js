import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './style.css';
class Trombone extends Component {
  
    render() {
        return (
            <div className="trombone_wrapper">
              <div className="trombone_title">
              {/* {
                this.props.trombone_name.map((item,index)=>{
                  return item;
                })
              }   */}
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
        );
    }
}

export default Trombone;






// {
//   this.props.trombone_name.map((item,index)=>{
//     return(
//       <div>{item}</div>
//     )
//   })
// }
// </div>
// <div>
// {
//   this.props.price.map((price,index)=>{
//     return(
//       <div>{price}</div>
//     )
//   })
// } 