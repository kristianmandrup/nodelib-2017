import categories from '../categories'
import dispatch from './dispatcher'

class Category {
  constructor(opts = {}) {   
    this.answers = {}
    this.q = categories 
  }

  async ask() {
    let dispatcher = await dispatch(this.q)
    return await dispatcher.ask()
  }
}

export default (opts) => {
  return new Category(opts)
}