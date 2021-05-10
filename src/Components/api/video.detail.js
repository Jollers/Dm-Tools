import React from "react";

const VideoDetail = (props) => {
    const video = props;
    console.log("from details " + video);

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        {/* <iframe title="frame" className="embed-responsive-item" src={url}></iframe> */}
      </div>
      <div className='details'>
        <div>{video.title}</div>
        <div>{video.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
