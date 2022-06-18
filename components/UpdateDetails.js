import React from "react";
import NavBar from "./NavBar/NavBar";

function UpdateDetails() {
  return (
    <div>
        <div>
            <NavBar/>
        </div>
      <div className="container" style={{margin:"60px"}}>
        <div style={{backgroundColor:"#2e2d2e",color:"#eb5e5f"}} >
        <h2>Update Details</h2></div>
        <div className="form-group">
          <label htmlFor="customerId">CustomerId</label>
          <input
            type="text"
            className="form-control"
            name="cId"
            
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="#">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone No.</label>
          <input
            type="text"
            className="form-control"
            name="phone"
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{marginRight:"15px"}}>Update</button>
                <button type="reset" className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
}

export default UpdateDetails;
