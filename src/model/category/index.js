import { log } from '../../utils'
import inquiry from './inquiry'
import index from '../categories'

class Category {
  constructor(name, props = {}) {
    this.name = name
    this.props = props  
    this.questions = props.questions        
  }

  async ask() {
    // log('ask questions', this.name, this.questions, this.inquiry)    
    await this.inquiry.ask()
  }

  get inquiry() {
    return inquiry(this.questions)
  }
}

export default (name, props) => {
  return new Category(name, props)
}
