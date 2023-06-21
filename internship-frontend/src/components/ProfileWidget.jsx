import React from 'react';

const ProfileWidget = ({ name, email, avatar }) => {
  return (
    <div className="profile-widget">
      <div className="profile-info">
        <img src={avatar} alt="Profile Avatar" className="avatar" />
        <div className="profile-details">
          <h3 className="name">{name}</h3>
          <p className="email">{email}</p>
        </div>
      </div>
      <button className="edit-button">Edit Profile</button>
    </div>
  );
};

export default ProfileWidget;
