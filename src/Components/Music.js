import React from "react";
import { Dropdown, Form } from "react-bootstrap";
// import VideoDetail from "./api/video.detail";
import youtube from "./api/youtube";

function Music() {

  let videos = [];
  const musicSearch = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    }).then(response =>{
      videos=[];
      response.data.items.forEach(element => {
        videos.push(element);
      });
    })
    console.log(videos); 
     
    // VideoDetail(videos[0].videoId);
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
      <div>Under construction</div>
      {/* <VideoDetail/> */}
    </div>
  );
}
export default Music;