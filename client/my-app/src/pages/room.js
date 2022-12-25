import {Link, useParams} from "react-router-dom";
import './room.css'
const Room = props => {
    const params = useParams()
    const {room} = params


    return (
        <>
            <h1>هلا  هلا هلا#{room}</h1>
            <div className="choice">
         <Link to={`/${room}/controller`} >
         controller
         </Link>

        <Link to={`/${room}/watcher`} >
         Watcher
         </Link>
            </div>
        </>

    )
}

export default Room
