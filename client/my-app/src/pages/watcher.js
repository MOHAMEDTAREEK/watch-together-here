import video from '../ass/Dj Loli [Original].mp4'
import './watcher.css'
const Watcher = props => {


    const source = video;


    props.socket.on('play', () => {
        document.querySelector('video').play()
    })

    props.socket.on('pause', () => {
        document.querySelector('video').pause()
    })


    return (
        <div className='video'>
            <h1>يا اللي مبتعرفش توقف الفيديو</h1>
            <video
                width='1200'
                height='600'
                src={source}
                controls={false}
            >
            </video>
            </div>
        )
}

export default Watcher