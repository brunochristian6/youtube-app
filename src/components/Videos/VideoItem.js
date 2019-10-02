import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="row bg-light m-2">
      <div className="col">
        <img
          className="mr-1 d-block"
          src={video.snippet.thumbnails.default.url}
        />
      </div>
      <div className="col">
        <p>{video.snippet.title}</p>
        <p> {video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoItem;
