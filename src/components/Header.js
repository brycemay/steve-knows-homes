import React, { Component } from "react";
import Logo from "../images/logo.png";
import Spons from "../images/ranlife.png";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          <img className="logo" height={250} width={250} src={Logo} alt="" />{" "}
        </p>
        <p className="title">
          Steve Thomson
        </p>
        {/* <p className="avatar">
          {" "}
          <img className="avatar" src={Avatar} alt="" />{" "}
        </p> */}
        <p className="spons">
          <img src={Spons} height={220} alt="" />
        </p>
      </div>
    );
  }
}
