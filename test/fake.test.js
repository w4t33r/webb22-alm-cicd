const request = require('supertest');

const app = require('../app');

describe('GET /fields', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/fields')
            .expect(200, done);
    });
});