import React, { Component } from "react";
import qrcode from "../assets/images/qrcode.png";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.timer = setInterval(() => { this.props.history.push("/"); }, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="min-h-screen min-w-full bg-gray-700 flex justify-center">
        <div className="md:w-4/12 w-full px-4">
          <div className="my-5">
            <img className="w-full" src={qrcode} alt="Logo" />
            <p className="bg-black text-white align-left font-bold p-3">
              Chat ADMIN for verification code
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
