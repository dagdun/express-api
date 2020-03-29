const request = require('supertest')
const server = require('../../../server')

describe('example unittest', () => {
  it('call get, should return json', async () => {
    const { statusCode, body } = await request(server).get('/v1.0/example')
    expect(statusCode).toEqual(200)
    expect(body.data).toEqual('example/get')
    expect(body.message).toEqual('success')
    expect(body.status).toEqual(200)
  })

  it('call post, should return json', async () => {
    const { statusCode, body } = await request(server).post('/v1.0/example')
    expect(statusCode).toEqual(200)
    expect(body.data).toEqual('example/post')
    expect(body.message).toEqual('success')
    expect(body.status).toEqual(200)
  })

  it('call getId, should return json', async () => {
    const id = 123
    const { statusCode, body } = await request(server).get(
      '/v1.0/example/' + id,
    )
    expect(statusCode).toEqual(200)
    expect(body.data).toEqual('example/getId/' + id)
    expect(body.message).toEqual('success')
    expect(body.status).toEqual(200)
  })

  it('call postId, should return json', async () => {
    const id = 123
    const { statusCode, body } = await request(server).post(
      '/v1.0/example/' + id,
    )
    expect(statusCode).toEqual(200)
    expect(body.data).toEqual('example/postId/' + id)
    expect(body.message).toEqual('success')
    expect(body.status).toEqual(200)
  })

  it('call deleteId, should return json', async () => {
    const id = 123
    const { statusCode, body } = await request(server).delete(
      '/v1.0/example/' + id,
    )
    expect(statusCode).toEqual(200)
    expect(body.data).toEqual('example/deleteId/' + id)
    expect(body.message).toEqual('success')
    expect(body.status).toEqual(200)
  })
})
