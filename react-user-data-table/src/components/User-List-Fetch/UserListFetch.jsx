// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import './UserList.css';
import './SearchBar.css';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let url = 'https://dummyjson.com/users';
        if (searchValue.trim() !== '') {
          url = `https://dummyjson.com/users/search?q=${searchValue}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data.users); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchValue]); 

  return (
    <div >
    

      <div className="input-wrapper">
      <Form  className='searchBar'onSubmit={(e) => e.preventDefault()}>
        <InputGroup className="searchBar">
          <FormControl
            placeholder="Search entries"
            aria-describedby="basic-addon1"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputGroup>
      </Form>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address.city}, {user.address.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
