import React, { useState } from "react";
import ReactPlayer from "react-player";
import video1 from "./assets/1.mp4";
import video2 from "./assets/2.mp4";
import video3 from "./assets/3.mp4";
import video4 from "./assets/4.mp4";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";

const Video = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [hoveredThumbnailIndex, setHoveredThumbnailIndex] = useState(-1);

  const videos = [
    {
      url: video1,
      thumbnail: img1,
    },
    {
      url: video2,
      thumbnail: img2,
    },
    {
      url: video3,
      thumbnail: img3,
    },
    {
      url: video4,
      thumbnail: img4,
    },
    {
      url: video1,
      thumbnail: img1,
    },
    {
      url: video2,
      thumbnail: img2,
    },
    {
      url: video3,
      thumbnail: img3,
    },
    {
      url: video4,
      thumbnail: img4,
    },
    {
      url: video1,
      thumbnail: img1,
    },
    {
      url: video2,
      thumbnail: img2,
    },
    {
      url: video3,
      thumbnail: img3,
    },
    {
      url: video4,
      thumbnail: img4,
    },
    {
      url: video1,
      thumbnail: img1,
    },
    {
      url: video2,
      thumbnail: img2,
    },
  ];

  const handleThumbnailClick = (index) => {
    setSelectedVideoIndex(index);
  };

  const handleThumbnailHover = (index) => {
    setHoveredThumbnailIndex(index);
  };

  const thumbContainer = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "10px",
  };

  const thumbnailStyle = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "5px",
    cursor: "pointer",
    opacity: 0.2,
    transition: "opacity 0.3s ease",
  };

  const activeThumbnailStyle = {
    opacity: 1,
  };

  const hoverThumbnailStyle = {
    opacity: 1,
    transform: "scale(1.1)",
  };

  return (
    <div>
      <ReactPlayer
        url={videos[selectedVideoIndex].url}
        controls={true}
        width="100%"
        height="auto"
        style={{ marginBottom: "20px" }}
      />
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          justifyContent: "center",
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            style={thumbContainer}
            onMouseEnter={() => handleThumbnailHover(index)}
            onMouseLeave={() => handleThumbnailHover(-1)}
          >
            <img
              src={video.thumbnail}
              alt={`Video Thumbnail ${index}`}
              style={{
                ...thumbnailStyle,
                ...(index === selectedVideoIndex && activeThumbnailStyle),
                ...(index === hoveredThumbnailIndex && hoverThumbnailStyle),
              }}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
