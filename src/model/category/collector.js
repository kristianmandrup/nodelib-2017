import categories from '../categories'
import list from './list'
import { log } from '../../utils'
import { merge } from 'lodash'

class Collector {
  constructor(opts = {}) {   
    this.answers = {}
    this.categoriesObj = categories 
  }

  async collectAll() {
    // for each category
    log('collector', this.categoriesObj)
    return await list(this.categoriesObj).collectAll()
  }
}

export default (opts) => {
  return new Collector(opts)
}