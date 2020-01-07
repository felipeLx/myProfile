import React from 'react';

import Desktop from '../../components/Profile/Desktop/Desktop';

const Profile = (props) => {

    const photosHandler = () => {
        fetch('https://photos.app.goo.gl/8rShUULHWw9gGwXg6')
            .map()
    };

    return(
        <div>
            <h1>Profile</h1>
            <Desktop>{photosHandler}</Desktop>
        </div>
    );
};

export default Profile;