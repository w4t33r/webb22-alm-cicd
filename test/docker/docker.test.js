const request = require('supertest');
describe('Background docker runs', function () {
    it('check is it runs', function () {
        return request('http://localhost:3000')
            .get('/')
            .expect(200);
    });
});

describe('Background docker runs', function () {
    it('GET /users from docker container', function () {
        return request('http://localhost:3000')
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('Background docker runs', function () {
    it('GET /calc from docker container', function () {
        return request('http://localhost:3000')
            .get('/calc')
            .expect(200);
    });
});