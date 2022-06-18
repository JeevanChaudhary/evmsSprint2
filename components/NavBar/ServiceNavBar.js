import React from "react";

function ServiceNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a className="navbar-brand" href="/home">
          Evms
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              All Service
            </a>
          </li>
            

        </ul>
      </nav>
    </div>
  );
}

export default ServiceNavBar;
