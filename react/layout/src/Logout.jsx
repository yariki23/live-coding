import React from 'react';
//input: obj ({onlogout: callback})
//out: jsx
const Logout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;
