import { Link } from "react-router-dom";

function UserCard({img, username, prof}){
    return (
        <>
            <Link to={`/${username}`} className="hover:cursor-pointer">
            <div className="border-1 border-neutral-200 rounded-2xl my-2 p-2">
                <div className="flex gap-2 items-center">
                    <img src={img} className="rounded-full h-16 w-16 object-cover"></img>
                    <div>
                        <h1>{username}</h1>
                        <h1>{prof}</h1>
                    </div>
                </div>
            </div>
            </Link>

            
        </>
    )
}

export default UserCard;