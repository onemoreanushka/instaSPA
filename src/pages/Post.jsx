import { useParams } from "react-router-dom";
import Users from "../User";
import { Link } from "react-router-dom";

function Post(){
    let {id} = useParams();
    let post = null;
    let user = null;
    for(let i=0; i<Users.length; i++){
        post = Users[i].posts.find(post => post.id == id);
        if(post) {
            user = Users[i];
            break;
        }
    } 
    //This is finding the post that matches the id by iterating through 
    // the entire database which is not the best practice in real life systems 
    // which have a humongous amount of data. 

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString("en-US", options);

    return(
        <>
            <div className="w-[720px] m-auto mt-48 flex gap-4 bg-neutral-100 p-4 rounded-lg">
                <img  src={post.image}></img>
                <div className="flex flex-col justify-between">
                    <div>
                        <Link to={`/${user.username}`}>
                            <div className="flex gap-2 items-center mb-1">
                                <img className="rounded-full w-14 h-14 object-cover" src={user.image}></img>
                                <div>
                                    <p>{user.name}</p>
                                    <p className="text-neutral-700 text-sm">{user.role}</p>
                                </div>
                            </div>
                        </Link>
                        <p>{post.caption}</p>
                    </div>
                    <div>
                        <div className="flex justify-between ">
                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-label="Notifications" className="x1lliihq x1n2onr6 x5n08af"><path d="M16.792 3.904A4.99 4.99 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.99 4.99 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.05 6.05 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97q.426.368.853.747l1.027.918a45 45 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45 45 0 0 0 3.626-3.115l.922-.824q.441-.39.885-.774c2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218"/></svg>
                                </div>
                                <div>
                                    <svg width="24" height="24" fill="currentColor" aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"/></svg>                    
                                </div>
                                <div>
                                <svg width="24" height="24" fill="currentColor" aria-label="Share Post" className="x1lliihq x1n2onr6 x1roi4f4"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2l7.218 7.083z"/></svg>
                                </div>
                            </div>
                            <div>
                                <svg width="24" height="24" fill="currentColor" aria-label="Save" className="x1lliihq x1n2onr6 x5n08af"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 21-8-7.56L4 21V3h16z"/></svg>
                            </div>
                        </div>
                        <p className="font-semibold">{post.likes} Likes</p>
                        <p className="text-sm">Posted on {formattedDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;