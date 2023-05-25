const request = require('supertest');

const app = require('../app');

describe('GET /fakeRoute', function () {
    it('trying to get fakeRoute', function (done) {
        request(app)
            .get('/fakeRoute')
            .expect(404, done);
    });
});