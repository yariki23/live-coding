import React, { useEffect, useState } from 'react';

const User = props => {
  //in: any
  //out: arr [any, func]
  const [userInfo, setUserInfo] = useState({
    avatarUrl: null,
    location: null,
    name: null,
  });

  const userId = props.match.params.userId;
  //in: func, arr
  //out: undefined
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(res => {
        setUserInfo({
          avatarUrl: res.avatar_url,
          location: res.location,
          name: res.name,
        });
      });
  }, [userId]);

  const { avatarUrl, location, name } = userInfo;

  if (avatarUrl === null) {
    return null;
  }
  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
