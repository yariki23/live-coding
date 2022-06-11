import React from 'react';
import Pagination from './Pagination';
import 

const UsersList = props => {
  return (
    <div>
      <Pagination/>
      <ul className="users">
        <User />
        <User />
        <User />
        <User />
        <User />
      </ul>
    </div>
  );
};
export default UsersList;
