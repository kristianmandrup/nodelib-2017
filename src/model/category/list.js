import categories from '../categories'
import item from './item'
import { log } from '../../utils'
import { merge } from 'lodash'

class CategoryList {
  constructor(categoriesObj) {   
    this.answers = {}
    this.categoriesObj = categoriesObj 
    // log('cat obj', categoriesObj)
  }

  // could be recursive!
  forCategory(name) { 
    let value = this.props(name)
    log('value', value)
    return item(name, value)  
  }  

  props(name) {
    let cat = this.categoriesObj[name]
    return (typeof cat === 'function') ? this.resolve(cat) : cat
  }

  resolve(cat) {
    log('resolving', cat, this.answers)
    return cat(this.answers)
  }

  get names() {
    if (Array.isArray(this.categoriesObj)) {
      return this.categoriesObj
    }
    return Object.keys(this.categoriesObj)
  }

  async collectAll() {
    // for each category
    let answers
    for (let name of this.names) {
      try {
        log('cat', name)
        let inquirer = await this.forCategory(name)
        log('inquirer', inquirer)
        answers = await inquirer.collectAll()
                
        this.answers = merge({}, this.answers, answers)
      } catch (err) {
        log(err)
      }            
    }    
    log('all answers', this.names, this.answers)
    return this.answers    
  }   
}

const list = (categoriesObj) => {
  return new CategoryList(categoriesObj)
}

export default list 
    