const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const url = 'http://localhost:8080'; 

describe('User deletion interface', () => {
  let token;

  before(async () => {
    // Log in as a user and get the token
    const response = await chai
      .request(url)
      .post('/users/login')
      .auth('testuser', 'testpass');
    token = response.body;
  });

  it('should delete the user and return a success message', async () => {
    // Delete the user using the token
    const response = await chai
      .request(url)
      .delete('/users/')
      .set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(200);
    expect(response.body).to.equal('User USERNAME deleted');
  });

  it('should return an error message if the user does not exist', async () => {
    // Delete the user using the token but it's already deleted
    const response = await chai
      .request(url)
      .delete('/users/')
      .set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(200);
    expect(response.body).to.equal('User not found');
  });

  after(async () => {
    // Log out the user
  });
});