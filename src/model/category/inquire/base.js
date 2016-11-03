import { log } from '../../utils'
import { merge } from 'lodash'
import validator from '../question/validator'
import inquisitor from 'master-inquisitor'
import dispatch from '../dispatcher'

export default class Base {
  constructor(q) {   
    this.q = q
    this.log = log
    this.merge = merge
    this.dispatch = dispatch 
    this.inquisitor = inquisitor
    this.validator = validator(q)
  }
  
  ensureValid() {
    if (!this.checkValid()) {
      throw `Invalid question value ${this.q}`
    }
    return this
  }

  async ask() {
    return await this.prompter(this.q)
  }    
}