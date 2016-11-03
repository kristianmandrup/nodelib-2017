import inquisitor from 'master-inquisitor'
import { log } from '../../utils'
import { merge } from 'lodash'

class Inquiry {
  constructor(name, questions) {
    this.name = name
    this.questions = questions
    this.allQuestions = Object.values(this.questions)
    this.answers = {}
    // log('all questions', this.allQuestions) 
  }

  async askAll() {
    for (let question of this.allQuestions) {
      let answers = await this.ask(question)
      this.answers = merge({}, this.answers, answers)
    }
    return this.answers    
  }

  async ask(question) {
    if (!question) return
    if (typeof question !== 'object') return
    if (!question.message) {
      let result = await inquiry(this.name, question).askAll()
      return result.answers      
    } else {      
      return await inquisitor.prompt([question])            
    }
  }      
}

const inquiry = (name, questions) => {
  return new Inquiry(name, questions)
}

export default inquiry
