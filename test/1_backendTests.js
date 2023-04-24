const assert = require('chai').assert;
const axios = require('axios');

const baseUrl = 'http://localhost:8080';

describe('User Creation', function() {
  it('should create a new user', async function() {
    const username = 'testuser';
    const password = 'testpassword';
    const response = await axios.post(`${baseUrl}/register`, { username, password });
    assert.equal(response.status, 200);
    assert.equal(response.data, username);
  });
});

describe('User Login', function() {
  it('should return a token for valid credentials', async function() {
    const username = 'testuser';
    const password = 'testpassword';
    const response = await axios.post(`${baseUrl}/users/login`, {}, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
      }
    });
    assert.equal(response.status, 200);
    assert.isString(response.data);
  });

  it('should return 401 for invalid credentials', async function() {
    const username = 'testuser';
    const password = 'wrongpassword';
    const response = await axios.post(`${baseUrl}/users/login`, {}, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
      }
    });
    assert.equal(response.status, 401);
  });
});

describe('User Deletion', function() {
  it('should delete an existing user', async function() {
    const username = 'testuser';
    const password = 'testpassword';
    const loginResponse = await axios.post(`${baseUrl}/users/login`, {}, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
      }
    });
    const token = loginResponse.data;
    const deleteResponse = await axios.delete(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    assert.equal(deleteResponse.status, 200);
    assert.equal(deleteResponse.data, `User ${username} deleted`);
  });

  it('should return 403 for non-existing user', async function() {
    const username = 'nonexistinguser';
    const password = 'testpassword';
    const loginResponse = await axios.post(`${baseUrl}/users/login`, {}, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
      }
    });
    const token = loginResponse.data;
    const deleteResponse = await axios.delete(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    assert.equal(deleteResponse.status, 403);
  });
});