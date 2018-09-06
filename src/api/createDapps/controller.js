import { success, notFound } from '../../services/response/'
import { CreateDapps } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CreateDapps.create(body)
    .then((createDapps) => createDapps.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  CreateDapps.find(query, select, cursor)
    .then((createDapps) => createDapps.map((createDapps) => createDapps.view()))
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CreateDapps.findById(params.id)
    .then(notFound(res))
    .then((createDapps) => createDapps ? createDapps.remove() : null)
    .then(success(res, 204))
    .catch(next)
