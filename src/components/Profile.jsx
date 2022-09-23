import React from 'react';
import { useSelector } from 'react-redux';
import { changeTheme } from '../features/theme';
import { useDispatch } from 'react-redux';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const themes = ["dark", "white"];

    const changeAppTheme = () => {
        let randomTheme = themes.length;
        dispatch(changeTheme(themes[Math.round(Math.random(randomTheme))]))
    }
    return (
        <div>
            <h1>Profile page</h1>
            <p>UserName: {user.userName}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <button onClick={changeAppTheme}>change theme</button>

        </div>
    )
}

export default Profile
