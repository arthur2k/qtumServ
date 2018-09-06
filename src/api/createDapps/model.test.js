import { CreateDapps } from '.'

let createDapps

beforeEach(async () => {
  createDapps = await CreateDapps.create({ name: 'test', rfc: 'test', id_contrac: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = createDapps.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(createDapps.id)
    expect(view.name).toBe(createDapps.name)
    expect(view.rfc).toBe(createDapps.rfc)
    expect(view.id_contrac).toBe(createDapps.id_contrac)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = createDapps.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(createDapps.id)
    expect(view.name).toBe(createDapps.name)
    expect(view.rfc).toBe(createDapps.rfc)
    expect(view.id_contrac).toBe(createDapps.id_contrac)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
