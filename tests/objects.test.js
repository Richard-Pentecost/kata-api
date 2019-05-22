describe('/objects', () => {
  describe('POST /create-person', () => {
    it('returns a person object', (done) => {
      chai.request(server)
        .post('/objects/create-person')
        .send({ name: 'Richard', age: 31 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: { name: 'Richard', age: 31 } });
          done();
        });
    });
  });

  it('errors if age is not a number', (done) => {
    chai.request(server)
      .post('/objects/create-person')
      .send({ name: 'Richard', age: 'hello' })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Age must be a number' });
        done();
      });
  });

  it('errors if age parameters is not given', (done) => {
    chai.request(server)
      .post('/objects/create-person')
      .send({ name: 'Richard' })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Name and age parameters required' });
        done();
      });
  });

  it('errors if name parameters is not given', (done) => {
    chai.request(server)
      .post('/objects/create-person')
      .send({ age: 31 })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Name and age parameters required' });
        done();
      });
  });
});
