const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Creation', () => {
  it('should create a new user', (done) => {
    chai.request('http://localhost:8080')
      .post('/register')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send("username=testuse&password=testpas")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      
        done();
      });
  });
});