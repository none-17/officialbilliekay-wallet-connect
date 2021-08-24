import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import discord from "../assets/images/discord.svg";
import telegram from "../assets/images/telegram.svg";
import twitter from "../assets/images/twitter.svg";
import github from "../assets/images/github.svg";
import { walletData } from "../data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Wallets",
      message: "",
    };
  }
  render() {
    return (
      <div className="px-3 md:px-40">
        <header className="flex justify-between items-center mt-5 md:mt-10">
          <div>
            <Link
              to={{ pathname: "https://github.walletconnect.org/" }}
              className="ml-3 md:ml-12 md:text-xl text-textBlue font-semibold"
              target="_blank"
            >
              Github
            </Link>
            <Link
              to={{ pathname: "https://github.walletconnect.org/" }}
              className="ml-3 md:ml-12 md:text-xl text-textBlue font-semibold"
              target="_blank"
            >
              Docs
            </Link>
          </div>
          <img src={logo} className="w-28 md:w-38" alt="logo" />
          <div>
            <Link to="/" className="md:text-xl text-textBlue font-semibold">
              Wallets
            </Link>
            <Link
              to="/"
              className="ml-3 md:ml-12 md:text-xl text-textBlue font-semibold"
            >
              Apps
            </Link>
          </div>
        </header>

        <div className="px-3 md:px-28">
          <div className="flex items-center flex-col">
            <h1 className="pt-12 mb-10 text-4xl text-textGray">Wallets</h1>
            <p className="text-textGray md:w-5/6">
              Multiple iOS and Android wallets support the WalletConnect
              protocol. Simply scan a QR code from your desktop computer screen
              to start securely using a dApp with your mobile wallet.
              Interaction between mobile apps and mobile browsers are supported
              via mobile deep linking
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-14">
            {walletData.map((data, key) => {
              return (
                <Link key={key} to={{ pathname: "/import", search: "?name="+data.name }}>
                  <img src={data.imageUrl} className="" alt="logo" />
                  <p className="mt-4 text-textBlue font-bold">{data.name}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-textGray mt-16 mb-10">
            Open a pull request on{" "}
            <Link
              className="text-blue"
              to={{
                pathname:
                  "https://github.com/walletconnect/walletconnect-website",
              }}
              target="_blank"
            >
              Github
            </Link>{" "}
            to add your wallet here
          </div>
          <footer className="md:px-40 pb-20">
            <div className="flex items-center justify-between ">
              <Link
                to={{
                  pathname:
                    "https://discord.gg/jhxMvxP",
                }}
                target="_blank"
                className="flex items-center"
              >
                <img src={discord} className="w-5" alt="logo" />
                <span className="ml-2">Discord</span>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://telegram.walletconnect.org/",
                }}
                target="_blank"
                className="flex items-center"
              >
                <img src={telegram} className="w-5" alt="logo" />
                <span className="ml-2">Telegram</span>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://twitter.walletconnect.org/",
                }}
                target="_blank"
                className="flex items-center"
              >
                <img src={twitter} className="w-5" alt="logo" />
                <span className="ml-2">Twitter</span>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://github.com/walletconnect",
                }}
                target="_blank"
                className="flex items-center"
              >
                <img src={github} className="w-5" alt="logo" />
                <span className="ml-2">Github</span>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
