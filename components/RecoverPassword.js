import React from "react";
import CustomerNavBar from "./NavBar/CustomerNavBar";

function RecoverPassword(){
    return(
        <div>
            <CustomerNavBar/>

            <div className="container" style={{marginTop:"70px"}}>
        
        <h2>Recover Password</h2>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Customer ID</label>
              <input type="text" className="form-control" name="cId" />
            </div>
            <div className="form-group">
              <label htmlFor="name">email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input type="text" className="form-control" name="phone" />
            </div>
  
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginRight: "15px" }}
            >
              Recover
            </button>
            <button type="reset" className="btn btn-secondary">
              Cancel
            </button>
          </form>
        </div></div>

        </div>
    )
}

export default RecoverPassword;