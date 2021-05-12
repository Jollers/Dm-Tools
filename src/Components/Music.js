import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import VideoDetail from "./api/video.detail";
import youtube from "./api/youtube";

function Music() {
  const [videos, setVideos] = useState();


  const musicSearch = async (searchTerm) => {
    const response = await youtube
      .get("/search", {
        params: {
          q: searchTerm,
        },
      })
      .then((response) => {
        let newVideos = [];
        response.data.items.forEach((element) => {
          newVideos.push(element.id.videoId);
        });
        setVideos(newVideos);
      });
    console.log(videos);
  };

  return (
    <div>
      <h1>Music and sound</h1>
      <Dropdown onSelect={musicSearch}>
        <Dropdown.Toggle id="dropdown-basic">We are:</Dropdown.Toggle>
        <Form.Text muted> Choose your setting in the dropdown menu</Form.Text>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="epic battle music">Fighting</Dropdown.Item>
          <Dropdown.Item eventKey="tavern ambient">In a tavern</Dropdown.Item>
          <Dropdown.Item eventKey="rollplaying adventure music woods">
            In the woods
          </Dropdown.Item>
          <Dropdown.Item eventKey="sexy music">Making love</Dropdown.Item>
          <Dropdown.Item eventKey="funny music">Silly</Dropdown.Item>
          <Dropdown.Item eventKey="happy music">Happy</Dropdown.Item>
          <Dropdown.Item eventKey="spooky rollplaying music">
            In a spooky place
          </Dropdown.Item>
          <Dropdown.Item eventKey="rollplaying dungeon music ambient">
            In a dragons lair/dungeon
          </Dropdown.Item>
          <Dropdown.Item eventKey="rollplaying carneval music">
            At a fair/carneval
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <VideoDetail Videos={videos} />
    </div>
  );
}
export default Music;
