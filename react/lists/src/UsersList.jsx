import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  itemsPerPage = 3;

  prevBtnHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  nextBtnHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const users = this.props.users;

    const startIndex = (this.state.currentPage - 1) * 3;
    const endIndex = startIndex + this.itemsPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.prevBtnHandler}
          goNext={this.nextBtnHandler}
          totalItems={users.length}
          itemsPerPage={this.itemsPerPage}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
