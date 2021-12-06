import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: "",
    error:""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.state.text === "") return;
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  onFormSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus
          />
          <button>Send</button>
          <p>{this.state.error}</p>
        </form>
      </div>
    );
  }
}

export default Input;