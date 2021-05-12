import React from "react";

const VideoDetail = (props) => {
  let videoId = props.data;

  if (!videoId) {
      videoId = 'hWPPD5ww0eA';
  }

  const url = "https://www.youtube.com/embed/"+videoId;

  return (
    <div className="flex-column col-md-4 text-center">
        <div>{url}</div>
       <div className="embed-responsive embed-responsive-16by9">
       <iframe
       width="853"
       height="480"
       src={url}
       frameBorder="0"
       allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
       title="Embedded youtube"
     /> 
       </div>
    </div>
  );
};

export default VideoDetail;
