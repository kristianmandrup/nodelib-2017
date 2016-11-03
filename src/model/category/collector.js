import categories from '../categories'
import category from './'
import { log } from '../../utils'
import { merge } from 'lodash'

class Collector {
  constructor(opts = {}) {
    this.categories = categories   
    this.answers = {} 
  }

  forCategory(name) {    
    return category(name, this.categories[name])
  }

  get names() {
    return Object.keys(this.categories)
  }

  async collectAnswers() {
    // for each category
    let answers
    for (let name of this.names) {
      try {
        answers = await this.forCategory(name).askAll()
        this.answers = merge({}, this.answers, answers)
      } catch (err) {
        log(err)
      }            
    }
    log('all answers', this.names, this.answers)    
  } 
}

export default (opts) => {
  return new Collector(opts)
}