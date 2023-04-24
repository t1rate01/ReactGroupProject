const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Creation', () => {
  it('should create a new user', (done) => {
    chai.request('http://localhost:8080')
      .post('/register')
      .send({ username: 'testuser', password: 'testpass' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.username).to.equal('testuser');
        done();
      });
  });
});