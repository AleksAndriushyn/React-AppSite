import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <div>
                    <ProfileStatus status={status} updateStatus={updateStatus} />
                </div>
                <div className={s.name}>
                    {profile.fullName}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;