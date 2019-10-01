import React, { Component } from "react";

class Search extends Component {
  state = { text: "" };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  // onSubmit = e => {
  //   e.preventDefault();
  //   this.setState({ name: this.state.text, text: "" });
  // };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              value={this.state.text}
              onChange={this.onChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
