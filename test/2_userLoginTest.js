const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('User login', () => {
  const appUrl = 'http://localhost:8080';
  let authToken;
//This tests if it can find the user
  it('should log in and get token', async () => {
    const res = await chai
      .request(appUrl)
      .post('/api/login')
      .set('content-type', 'application/json')
      .set('Authorization', 'Basic '+btoa('testuse'+ ":" + 'testpas'))

    expect(res).to.have.status(200);
    expect(res.text).to.be.a('string'); // verify that response is a string
    authToken = res.text; // store the token string directly

  });

  it('should return private data on successful authentication', async () => {
    // use the stored authToken variable here
    const res = await chai
      .request(appUrl)
      .get('/api/users/private')
      .set({ Authorization: 'Bearer '+authToken });

    expect(res).to.have.status(200);
  
  });
});