import React, { Component } from "react";

class Search extends Component {
  state = { text: "" };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
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
