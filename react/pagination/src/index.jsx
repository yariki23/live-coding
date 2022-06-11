import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList />, rootElement);
