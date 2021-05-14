import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const VideoDetail = (id) => {
  let videoId = id.id;

  if (!videoId) {
    videoId = "hWPPD5ww0eA";
  }

  const url = "https://www.youtube.com/embed/" + videoId;

  return (
    <Container className="align-content-center">
      <Row>
        <Col>
          <iframe
            width="453"
            height="280"
            src={url}
            title={videoId}
            id={videoId}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default VideoDetail;
