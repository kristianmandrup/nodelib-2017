import inquisitor from 'master-inquisitor'
import { log } from '../../utils'
import { merge } from 'lodash'
import categoryList from './list'

class Inquiry {
  constructor(name, questions) {
    this.name = name
    this.questions = questions
    // log('questions', this.name, this.questions)
    this.allQuestions = Object.values(this.questions)
    this.answers = {}
    // log('all questions', this.allQuestions) 
  }

  async askAll() {
    for (let question of this.allQuestions) {
      let answers = await this.ask(question)
      log('answers', answers)
      this.answers = merge({}, this.answers, answers)
    }
    return this.answers    
  }

  resolve(question) {
    log('resolving', question, this.answers)
    return question(this.answers)
  }

  async ask(question) {
    log('ask', this.name, question)
    if (!question) return
    if (typeof question === 'function') {
      question = this.resolve(question)
      this.name = question.name
    }
    if (typeof question !== 'object') return
    if (!question.message) {
      log('not a regular q', question)

      let result = await categoryList(question).collectAll()
      log('deep answers', result)
      return result      
    } else {      
       let answer = await inquisitor.question(question)
       return { [this.name]: answer }            
    }
  }      
}

const inquiry = (name, questions) => {
  return new Inquiry(name, questions)
}

export default inquiry
