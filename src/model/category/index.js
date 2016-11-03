import categories from '../categories'
import dispatch from './dispatcher'

class Questionaire {
  constructor(opts = {}) {   
    this.answers = {}
    this.q = categories 
  }

  async ask() {
    return await dispatch(this.q)
  }
}

export default (opts) => {
  return new Questions(opts)
}