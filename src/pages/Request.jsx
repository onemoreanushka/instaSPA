import Users from '../User';
import UserCard from '../components/UserCard';

function Request(){
    return (
        <>
            <div className="w-[400px] mx-auto my-32 ">
                <h1 className="text-2xl font-bold">Your Follow Requests</h1>

                {
                    Users.map(u =>
                        <UserCard key={u.username} img={u.image} username={u.username} prof={u.role}></UserCard>
                    )
                }
            </div>
        </>
    )
}

export default Request;