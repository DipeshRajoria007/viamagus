import { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const videos = [
    {
      url: "../src/assets/1.mp4",
      thumbnail: "../src/assets/1.jpg",
    },
    {
      url: "../src/assets/2.mp4",
      thumbnail: "../src/assets/2.jpg",
    },
    {
      url: "../src/assets/3.mp4",
      thumbnail: "../src/assets/3.jpg",
    },
    {
      url: "../src/assets/4.mp4",
      thumbnail: "../src/assets/4.jpg",
    },
  ];
  const handleThumbnailClick = (index) => {
    setSelectedVideoIndex(index);
  };
  const thumbnailStyle = {
    width: "200px",

    margin: "5px",
    cursor: "pointer",
    opacity: 0.2,
    transition: "opacity 0.3s ease",
  };

  const activeThumbnailStyle = {
    opacity: 1,
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
          overflowX: "auto",
          justifyContent: "center",
        }}
      >
        {videos.map((video, index) => (
          <img
            key={index}
            src={video.thumbnail}
            alt={`Video Thumbnail ${index}`}
            style={{
              ...thumbnailStyle,
              ...(index === selectedVideoIndex && activeThumbnailStyle),
            }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Video;
