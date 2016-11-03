import { log } from '../../utils'
import inquiry from './inquiry'
import index from '../categories'

class CategoryItem {
  constructor(name, props = {}) {
    this.name = name
    log('props', props)
    this.props = props  
    this.questions = props.questions || props        
  }

  async collectAll() {
    log('ask category:', this.name)
    // log('ask questions', this.name, this.questions, this.inquiry)    
    let result = await this.inquiry.askAll()
    return result
  }

  get inquiry() {
    return inquiry(this.name, this.questions)
  }
}

export default (name, props) => {
  return new CategoryItem(name, props)
}
