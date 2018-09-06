import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CreateDapps } from '.'

const app = () => express(apiRoot, routes)

let createDapps

beforeEach(async () => {
  createDapps = await CreateDapps.create({})
})

test('POST /createDapps 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', rfc: 'test', id_contrac: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.rfc).toEqual('test')
  expect(body.id_contrac).toEqual('test')
})

test('GET /createDapps 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('DELETE /createDapps/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${createDapps.id}`)
  expect(status).toBe(204)
})

test('DELETE /createDapps/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
