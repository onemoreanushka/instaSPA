import Users from "../User";
import { useParams } from "react-router-dom";
import Feed from "../components/Feed";

function UserDetails(){
    let {username} = useParams();
    let currUser = Users.find(u => u.username == username); 
    return (
        <>
            <div className="flex gap-10 w-[800px] mx-auto mt-32 mb-16 bg-neutral-50 border border-neutral-100 px-10 py-4 rounded-lg">
                <img className="rounded-full w-40 h-40 object-cover" src={currUser.image}></img>
                <div>
                    <h1 className="text-xl font-bold">{currUser.name}</h1>
                    <p>{currUser.role}</p>
                    <p>{currUser.bio}</p>
                    <div className="flex gap-2 justify-between w-[50%] mt-4">
                        <div className="bg-neutral-100 py-1 px-2 rounded-lg">
                            <p>Followers</p>
                            <p>{currUser.followers}</p>
                        </div>
                        <div className="bg-neutral-100 py-1 px-2 rounded-lg">
                            <p>Following</p>
                            <p>{currUser.following}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mx-auto w-[1250px]">
                {
                    currUser.posts.map(post=> <Feed key={post.id} currUser={currUser} img={post.image} id={post.id}></Feed>) //this sends the user details to the Feed function in components
                    
                }
            </div>
        </>
    )
}

export default UserDetails;