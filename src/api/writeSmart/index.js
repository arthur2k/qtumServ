import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { create } from './controller'
import { schema } from './model'
export WriteSmart, { schema } from './model'

const router = new Router()
const { id_smart, data } = schema.tree

/**
 * @api {post} /writeSmarts Create write smart
 * @apiName CreateWriteSmart
 * @apiGroup WriteSmart
 * @apiParam id_smart Write smart's id_smart.
 * @apiParam data Write smart's data.
 * @apiSuccess {Object} writeSmart Write smart's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Write smart not found.
 */
router.post('/',
  body({ id_smart, data }),
  create)

export default router
