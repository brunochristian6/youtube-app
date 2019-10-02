import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Videos/Video";
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSubmit = async search => {
    const KEY = process.env.REACT_APP_API_KEY;

    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            maxResults: 5,
            key: KEY,
            q: search
          }
        }
      );

      console.log(res.data.items);
      this.setState({ videos: res.data.items });
    } catch (err) {
      console.log(err);
    }
  };

  onVideoSelect = video => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Fragment>
        <Navbar onSubmit={this.onSubmit} />
        <div className="container">
          <Video
            videoDetail={this.state.selectedVideo}
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
