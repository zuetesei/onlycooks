import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from "../../assets/logo.png";
import Auth from "../../utils/Auth";

function Nav() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavBar();
  }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
        >
          {" "}
          <ReorderIcon />{" "}
        </button>
      </div>

      <div className="links">
        <Link to="/">
          {" "}
          <img className="logo" src={Logo} alt="company logo" />{" "}
        </Link>
        <Link id="cubic" to="/">
          {" "}
          <span title="Home"> Home </span>{" "}
        </Link>
        <Link id="cubic" to="/signup">
          {" "}
          <span title="Sign Up"> Sign Up </span>{" "}
        </Link>
        <Link id="cubic" to="/about">
          {" "}
          <span title="About"> About </span>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
