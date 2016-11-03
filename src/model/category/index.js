import { log } from '../../utils'
import inquiry from './inquiry'
import index from '../categories'

class Category {
  constructor(name, props = {}) {
    this.name = name
    this.props = props  
    this.questions = props.questions        
  }

  async askAll() {
    // log('ask questions', this.name, this.questions, this.inquiry)    
    let result = await this.inquiry.askAll()
    return result
  }

  get inquiry() {
    return inquiry(this.name, this.questions)
  }
}

export default (name, props) => {
  return new Category(name, props)
}
