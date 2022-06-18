import React from "react";
import CustomerNavBar from "./NavBar/CustomerNavBar";

function ChangePassword() {
  return (
    <div>
        <CustomerNavBar/>
      <div className="container" style={{marginTop:"70px"}}>
        
      <h2>Change Password</h2>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Customer ID</label>
            <input type="text" className="form-control" name="cId" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Old Password</label>
            <input type="text" className="form-control" name="oName" />
          </div>
          <div className="form-group">
            <label htmlFor="name">New Password</label>
            <input type="text" className="form-control" name="nName" />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "15px" }}
          >
            Change
          </button>
          <button type="reset" className="btn btn-secondary">
            Cancel
          </button>
        </form>
      </div></div>
    </div>
  );
}

export default ChangePassword;
