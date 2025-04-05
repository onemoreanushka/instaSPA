import { Link } from "react-router-dom";

// function Navbar(){
//     return (
//         <>
//             <div className="absolute top-0 h-20 w-full bg-black text-white flex items-center">
//                 <div className="flex justify-between w-full m-2">
//                     <Link className="font-bold" to="/">This is a SinglePageApp</Link>
//                     <Link to="/about">About</Link>
//                     <Link to="/bye">Bye</Link>
//                 </div>
//             </div>
//         </>
//     )
// }

function Navbar(){
    return (
        <>
            <div className="absolute top-0 w-full border-b-1">
                <div className="flex justify-between items-center h-16 w-[80%] mx-auto">
                    <Link className="font-bold mx-4 text-xl" to="/">Instagram</Link>
                    <div className="flex gap-4 mx-4">
                        <Link to="/about">About</Link>
                        <Link to="/requests">Requests</Link>
                        <Link to="/bye">Bye</Link>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;