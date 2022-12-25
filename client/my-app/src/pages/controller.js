import {useParams} from "react-router-dom";
import video from '../ass/Dj Loli [Original].mp4'
import './controller.css'
const Controller = props => {
   


    const params = useParams()
    const {room} = params

const source = video;

    const onPlayHandler = () => {
        props.socket.emit('play-video', {
         room: room
        })
    }

    const onPauseHandler = () => {
        props.socket.emit('pause-video', {
          room: room
        })
    }


    return (
        <div className="video">
            <h1>اوعي تنسي توقف الفيديو لاخوك </h1>
            <video
                onPlay={onPlayHandler}
                onPause={onPauseHandler}
                src={source}
                controls={true}
                width='1200'
                height='600'
            >
            </video>

        </div>
    )
}

export default Controller;