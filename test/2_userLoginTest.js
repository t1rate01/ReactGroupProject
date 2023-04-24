const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('User login', () => {
  const appUrl = 'http://localhost:8080';
//This tests if it can find the user
  it('should register a new user', async () => {
    const res = await chai
      .request(appUrl)
      .post('/register')
      .send({
        username: 'testuser',
        password: 'testpass'
      });

    expect(res).to.have.status(200);
    expect(res.body).to.equal('testuser');
  });
//This tests if it can get a token
  it('should return a JWT token on successful login', async () => {
    const res = await chai
      .request(appUrl)
      .post('/users/login')
      .set('Authorization', 'Basic ' + Buffer.from('testuser:testpass').toString('base64'));

    expect(res).to.have.status(200);
    expect(res.body).to.be.a('string');
    authToken = res.body;
  });
//tests if it can get the token and access private data
  it('should return private data on successful authentication', async () => {
    const res = await chai
      .request(appUrl)
      .get('/users/private')
      .set('Authorization', 'Bearer ' + authToken);

    expect(res).to.have.status(200);
    expect(res.body).to.equal('Private data for testuser');
  });
});