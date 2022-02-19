/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class layout extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Header />
        <div className="">{this.props.children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default layout;
