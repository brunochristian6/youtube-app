import React from "react";
import Videolist from "./Videolist";
import VideoDetail from "./VideoDetail";
const Video = ({ videos, onVideoSelect, videoDetail }) => {
  return (
    <div className="row mt-3">
      <div className="col-lg-8">
        <VideoDetail videoDetail={videoDetail} />
      </div>
      <div className="col-lg-4 ml-0">
        <Videolist videos={videos} onVideoSelect={onVideoSelect} />
      </div>
    </div>
  );
};

export default Video;
