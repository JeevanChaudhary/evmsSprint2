import React from "react";
import CustomerNavBar from "./NavBar/CustomerNavBar";



function CustomerDashboard() {
  return (
    <div>
      <CustomerNavBar/>

      <div className="container" style={{paddingTop:"80px"}}>

        <h2>User Dashboard</h2>

        <br>
        </br>
        
        <button type="button" class="btn btn-primary btn-lg btn-block">
          Update Profile
        </button>
        <button type="button" class="btn btn-secondary btn-lg btn-block">
          Reset Password
        </button>
        
      </div>
    </div>
  );
}

export default CustomerDashboard;
