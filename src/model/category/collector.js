import categories from '../categories'
import category from './'
import { log } from '../../utils'

class Collector {
  constructor(opts = {}) {
    this.categories = categories    
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
        answers = await this.forCategory(name).ask()
      } catch (err) {
        log(err)
      }      
      log(name, answers)
    }
  } 
}

export default (opts) => {
  return new Collector(opts)
}