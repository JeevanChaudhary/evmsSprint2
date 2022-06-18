import React from "react";
import EnquiryNavBar from "./NavBar/EnquiryNavBar";

function Enquiry() {
  return (
    <div>
      <EnquiryNavBar />

      <div className="container"  style={{ margin: "80px" }}>
        <form>
          <div style={{ backgroundColor: "#2e2d2d", color: "#eb5e5e" }}>
            <h2>Enquiry From</h2>{" "}
          </div>
          <br />
          <div className="form-group">
            <label for="formGroupExampleInput">
              <h4>CustomerId</h4>
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter CustomerId"
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Your Query </span>
            </div>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <br />
          <button
            type="submit"
            class="btn btn-primary"
            style={{ marginRight: "15px" }}
          >
            Submit
          </button>
          <button type="reset" class="btn btn-secondary">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;
