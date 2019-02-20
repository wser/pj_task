import React, { Component } from 'react';
import './List.scss';
import axios from 'axios';
import Lorem from 'react-lorem-component'

export default class Sender extends Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  getUsers() {
    // We're using axios instead of Fetch
    axios
      // The API we're requesting data from
      .get('https://randomuser.me/api/?results=5')
      // Once we get a response, we'll map the API endpoints to our props
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.thumbnail}`
        }))
      )
      // Let's make sure to change the loading state to display the data
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <div>
          {!isLoading ? (
            users.map(user => {
              const { username, name, email, image } = user;
              return (
                <div key={username} className='Sender'>
                  <div className='picture'>
                    <img src={image} alt={name} />
                  </div>
                  <div className='info'>
                    <p className='name'>{name.toUpperCase()}</p>
                    <p className='title'>{username.charAt(0).toUpperCase() + username.slice(1)}</p>
                    <Lorem count='1' seed='2' sentenceLowerBound="1" sentenceUpperBound="3"/>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
