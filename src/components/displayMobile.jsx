import React, { Component } from "react";

class DisplayMobiles extends Component {



  render() {
    return (
      <React.Fragment>
        <div className="col-3 bg-secondary text-white text-center border mb-1 ml-4 p-2" onClick={()=>this.props.onAdd(this.props.mobiles)}>
         <span>{this.props.mobiles.name}{this.props.mobiles.desc1} </span><br/>
         <span>{this.props.mobiles.desc2}</span><br/>
         <button className="btn btn-primary btn-sm">{this.props.mobiles.price}</button>
        </div>
       
      </React.Fragment>
    );
  }
}

export default DisplayMobiles;
