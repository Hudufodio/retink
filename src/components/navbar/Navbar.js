import React from "react";
import "./styles.scss";
import retink from "../images/retink.jpeg";
import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";
import * as PiIcons from "react-icons/pi";

function Navbar({ toggle }) {
  return (
    <header>
      <div className="search-input">
        <input
          type="text"
          className="query"
          name=""
          placeholder="Searc for templates, projects, etc"
        />
        <div className="icons">
          <AiIcons.AiOutlineSearch  className="lens"/>
          <AiIcons.AiOutlineClose  className="close"/>
        </div>
      </div>

      <div className="btn-container">
        <button>
          <p>Create Content</p>
        </button>
      </div>
      <label htmlFor="switch" class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <div className="nav">
        <ul className="icon">
          <li>
            <a onClick={toggle} href="/caledar" className="icon-calendar">
              <RxIcons.RxCalendar />
            </a>
          </li>
        </ul>
        <ul className="icon">
          <li>
            <a onClick={toggle} href="/bell" className="icon-bell">
              <PiIcons.PiBellLight />
            </a>
          </li>
        </ul>
        <ul className="icon">
          <li>
            <a onClick={toggle} href="/profile" className="icon-image">
              <img
                src={retink}
                alt="client"
                className="profile"
                width={35}
                height={35}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
