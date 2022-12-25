import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import Welcome from "./pages/welcome";
import io from 'socket.io-client'
import Room from "./pages/room";
import Controller from "./pages/controller";
import Watcher from "./pages/watcher";


function App() {

  const socket = io.connect('http://localhost:8000')

  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Welcome socket={socket}/>}/>
  <Route path='/:room' element={<Room socket={socket}/>}/>
  <Route path='/:room/controller' element={<Controller socket={socket}/>}/>
  <Route path='/:room/watcher' element={<Watcher socket={socket}/>}/>
 </Routes>
 </BrowserRouter>
    
  );
}

export default App;
