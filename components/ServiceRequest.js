import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addService } from "../store/actions/GetAllServicesActions";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

function ServiceRequest() {
  
  const[cId,setCId]=useState("");
  const [sCategory, setCategory] = useState("");
  const [sModel, setModel] = useState("");
  const [sVehicleName, setVehicleName] = useState("");
  const [sBrand, setBrand] = useState("");

  const {id}=useParams();

  const newService = useSelector((state) => state.serviceReducer.newService);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {

    event.preventDefault();
    const payload = {
      
      
      category: sCategory,
      model: sModel,
      vehicleName: sVehicleName,
      brand: sBrand,
      serviceListId:id

    }



    // console.log(cId)
    // console.log(payload)


    dispatch(addService(cId,payload));
    
  };

  return (
    <div className="container">
      <div>
        <NavBar />
      </div>
      <div style={{ margin: "60px" }}>
        <form>
          <div
            className="container"
            style={{ width: "70%", backgroundColor: "#e8e3e3" }}
          >
            <div style={{ backgroundColor: "#2e2d2d", color: "#eb5e5e" }}>
              <h2>Service Form</h2>
            </div>
            <br />
            <div className="form-group">

              <label htmlFor="cId">CustomerId</label>
              <input
                type="text"
                className="form-control"
                name="cId"
                value={cId}
                onChange={(e) => setCId(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={sCategory}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                className="form-control"
                name="model"
                value={sModel}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vName">Vechile Name</label>
              <input
                type="text"
                className="form-control"
                name="vName"
                value={sVehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                className="form-control"
                name="brand"
                value={sBrand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              style={{ marginRight: "15px" }}
            >
              Submit
            </button>

            <button type="reset" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceRequest;
