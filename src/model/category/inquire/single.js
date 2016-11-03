import { log } from '../../utils'
import { merge } from 'lodash'


class Single {
  // can be either Object or Array
  constructor(q, ctx) {   
    super(q, ctx)
    this.checkValid = this.validator.isQuestion
    this.prompter = this.inquisitor.prompt 
  }
}

export default (q) => {
  return new Single(q).ensureValid()
}
