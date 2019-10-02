import React from "react";
import VideoItem from "./VideoItem";

const Videolist = ({ videos, onVideoSelect }) =>
  videos.map(v => (
    <VideoItem key={v.id.channelId} video={v} onVideoSelect={onVideoSelect} />
  ));

export default Videolist;
