import React from 'react';
import { useSelector } from 'react-redux';


const Profile = () => {
    const user = useSelector((state) => state.user.value)
    return (
        <div>
            <h1>Profile page</h1>
            <p>UserName: {user.userName}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default Profile
