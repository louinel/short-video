import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      Short Video App
      <div className="app__videos">
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="neelDev7"
          description="Macbook Air to new Windows editing beast"
          song="I am a Windows PC"
          likes={345}
          shares={200}
          messages={90}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
      </div>
    </div>
  );
}

export default App;
