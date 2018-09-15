import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WriteSmart } from '.'

const app = () => express(apiRoot, routes)

let writeSmart

beforeEach(async () => {
  writeSmart = await WriteSmart.create({})
})

test('POST /writeSmarts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ id_smart: 'test', data: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id_smart).toEqual('test')
  expect(body.data).toEqual('test')
})
