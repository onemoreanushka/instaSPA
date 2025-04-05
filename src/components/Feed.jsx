import { Link } from "react-router-dom";

function Feed({img, id}){ //the img is inherited from UserDetails.jsx
    return(
        <>
            <Link to={`/post/${id}`}>
            <div  className="m-2">
                <img className="h-[400px] w-[400px] object-cover" src={img}></img>
            </div>
            </Link>
        </>
    )
}


export default Feed;