
import VideosDb from "./data/Videos"
import { useState } from "react";
import Addvideos from "./components/Addvideos";
import VideosList from "./components/VideosList";
import './App.css'

function App() {
  const [Videos, setVideos] = useState(VideosDb);
  const [editVideo, setVideo] = useState(null);
  function addVideos(values) {
    setVideos([...Videos,
    { ...values, id: Videos.length + 1 }
    ]);
  }
  function handleDelete(id) {
    setVideos(Videos.filter(video => video.id !== id));
  }
  function editVideos(id) {
    setVideo(Videos.find(video => video.id == id));


  }
  function updateVideo(values) {
    console.log(values)
    const index = Videos.findIndex(V => V.id === values.id)
    const newVideos = [...Videos]
    newVideos.splice(index, 1, values);
    setVideos(newVideos)
  }
  return (
    <>
      <div className="App">
        <div>
          <Addvideos addVideos={addVideos} updateVideo={updateVideo} editVideo={editVideo}></Addvideos>
        </div>
        <VideosList handleDelete={handleDelete} editVideos={editVideos} Videos={Videos}></VideosList>
      </div>
    </>
  );
}
export default App