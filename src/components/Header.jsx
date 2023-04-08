import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="text-white">
      <div className="bg-secondary">
        <div className="info flex max-w-7xl mx-auto justify-around text-xs items-center py-3">
          <div className="flex gap-6">
            <p>
              <FontAwesomeIcon icon={faMap} /> London, United Kingdom
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 1-800-123-1234
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> example@high-school.com
            </p>
          </div>
          <div className="flex gap-6">
            <Link>Employment</Link>
            <Link>Staff Directory</Link>
            <Link>Events</Link>
            <Link>News</Link>
            <Link>Contacts</Link>
          </div>
        </div>
      </div>
      <div className="bg-primary  text-center">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-around items-center">
            <div className="logo">
              <img className="h-28 w-28" src="high-school-logo-1.png" alt="" />
            </div>

            <div className="nav-items flex gap-8 text-2xl font-bold">
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contacts">Contacts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
