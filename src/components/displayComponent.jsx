import React, { Component } from "react";
import DisplayMobiles from "./displayMobile";
import { getMobileData } from "./mobileData";

class DisplayComponents extends Component {
  state = {
    mobiles: getMobileData(),
    cart: [],
  };
  clickedCart = (mobs) => {
    let carts = [...this.state.cart];
    let index = carts.findIndex((p1) => {
      return p1.name === mobs.name;
    });
    console.log(index);
    index < 0
      ? carts.push({ name: mobs.name, quantity: 1, price: mobs.price })
      : carts[index].quantity++;
    this.setState({ cart: carts });
  };
  cartData() {
    return (
      <ul>
        {this.state.cart.map((p1) => {
          return (
            <li className="m-2" key={p1.name}>
              Name:{p1.name}, Quantity:{p1.quantity}
              <button className="btn btn-danger" onClick={()=>this.removeItem(p1)}>Remove Item</button>
            </li>
          );
        })}
      </ul>
    );
  }

  removeItem=(val)=>{
    let carts = [...this.state.cart];
    let index=carts.findIndex(p1=>{return p1.name===val.name});
    carts[index].quantity===1?carts.splice(index,1):carts[index].quantity--;
    this.setState({cart:carts});
    
  }
  displayCart() {
    let disp = this.state.cart.length === 0 ? "Nothing" : this.cartData();
    return disp;
  }

  cartValue() {
    return this.state.cart.length === 0 ? " " : this.calculate();
  }

  calculate() {
    let disp = (
      <span>
        Number of Items:
        {this.state.cart.reduce((prev, curr) => (prev += curr.quantity), 0)}
        <br />
        Total Value Of Cart:
        {this.state.cart.reduce((prev, curr) => (prev += (curr.quantity*curr.price)), 0)}
        <br />
      </span>
    );
    console.log(disp);
    return disp;
  }
  render() {
    return (
      <div>
        <div className="container">
          <h4 className="display-5 text-center">Exciting Mobile Deals</h4>
          <div className="row justify-content-center">
            {this.state.mobiles.map((m1) => {
              return (
                <DisplayMobiles
                  mobiles={m1}
                  key={m1.name}
                  onAdd={this.clickedCart}
                  
                ></DisplayMobiles>
              );
            })}
          </div>
          <h5 className="display-5">Cart:</h5>
          {this.displayCart()}
          {this.cartValue()}
        </div>
      </div>
    );
  }
}

export default DisplayComponents;
