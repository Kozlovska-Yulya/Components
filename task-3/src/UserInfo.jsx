import React from 'react';
import Avatar from './Avatar.jsx';

const userInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default userInfo;
