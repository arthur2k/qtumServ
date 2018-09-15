import { WriteSmart } from '.'

let writeSmart

beforeEach(async () => {
  writeSmart = await WriteSmart.create({ id_smart: 'test', data: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = writeSmart.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(writeSmart.id)
    expect(view.id_smart).toBe(writeSmart.id_smart)
    expect(view.data).toBe(writeSmart.data)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = writeSmart.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(writeSmart.id)
    expect(view.id_smart).toBe(writeSmart.id_smart)
    expect(view.data).toBe(writeSmart.data)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
