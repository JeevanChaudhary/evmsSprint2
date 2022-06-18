import React from "react";

function CustomerNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a className="navbar-brand" href="/home">
          Evms
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/customerdashboard">
              Dashboard
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/customerdashboard/changepassword">
              ChangePassword
            </a>
          </li>

           <li className="nav-item">
            <a className="nav-link" href="/customerdashboard/recoverpassword">
              RecoverPassword
            </a>
          </li> 

        </ul>
      </nav>
    </div>
  );
}

export default CustomerNavBar;