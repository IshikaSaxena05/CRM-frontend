import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  const style = {
    textDecoration: "none",
  };

  return (
    <header>
      <nav className="navbar navbar-dark text-white" style={{backgroundColor:'gray'}}>
        <div className="container">
          <Link style={style} to="/">
            <span className="navbar-brand mb-0">CRM App</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default HomeNav;
