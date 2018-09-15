import { success, notFound } from '../../services/response/'
import { WriteSmart } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WriteSmart.create(body)
    .then((writeSmart) => writeSmart.view(true))
    .then(success(res, 201))
    .catch(next)
