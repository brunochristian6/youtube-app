import React from "react";

const VideoDetail = ({ videoDetail }) => {
  if (!videoDetail) {
    return (
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/`}
          allowfullscreen
        ></iframe>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${videoDetail.id.videoId}`}
          allowfullscreen
        ></iframe>
      </div>
      <div class="card">
        <div class="card-header">{videoDetail.snippet.title}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{videoDetail.snippet.description}</p>
            <footer class="blockquote-footer">
              {videoDetail.snippet.channelTitle}
            </footer>
          </blockquote>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoDetail;
