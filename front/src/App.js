import { useEffect, useState } from "react";
import Video from "./components/Video";
import axios from "./components/axios.js";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get("/v2/posts");
        const json = await response.data;
        setVideos(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="app">
      Short Video App
      <div className="app__videos">
        {videos.map(({ url, channel, description, song, likes, shares, messages }) => (
          <Video
            key={url} 
            url={url} 
            channel={channel} 
            description={description} 
            song={song} 
            likes={likes} 
            shares={shares} 
            messages={messages} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
