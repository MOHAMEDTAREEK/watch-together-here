import { useState } from "react"
import Input from "../components/input"
import {Link} from "react-router-dom";
import './welcome.css'
const Welcome = (props) => {
    const [roomId, setRoomId] = useState('')
   
    const joinRoomHandler = () => {
        props.socket.emit('join-room', {
            roomId: roomId
        })
    }

    return (
        <div className="container">
        <h1>Join bsor3a</h1>
        <Input  placeholder='Room ID' onChange={(event) => {
                setRoomId(event.target.value) }}/>
                <div>
                    <Link to={`/${roomId}`} onClick={joinRoomHandler}>
                    join
                    </Link>
                </div>
      
        </div>

    )
}
export default Welcome;