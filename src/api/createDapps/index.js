import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, destroy } from './controller'
import { schema } from './model'
export CreateDapps, { schema } from './model'

const router = new Router()
const { name, rfc, id_contrac } = schema.tree

/**
 * @api {post} /createDapps Create create dapps
 * @apiName CreateCreateDapps
 * @apiGroup CreateDapps
 * @apiParam name Create dapps's name.
 * @apiParam rfc Create dapps's rfc.
 * @apiParam id_contrac Create dapps's id_contrac.
 * @apiSuccess {Object} createDapps Create dapps's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Create dapps not found.
 */
router.post('/',
  body({ name, rfc, id_contrac }),
  create)

/**
 * @api {get} /createDapps Retrieve create dapps
 * @apiName RetrieveCreateDapps
 * @apiGroup CreateDapps
 * @apiUse listParams
 * @apiSuccess {Object[]} createDapps List of create dapps.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {delete} /createDapps/:id Delete create dapps
 * @apiName DeleteCreateDapps
 * @apiGroup CreateDapps
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Create dapps not found.
 */
router.delete('/:id',
  destroy)

export default router
