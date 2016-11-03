import inquisitor from 'master-inquisitor'
import { log } from '../../utils'

class Inquiry {
  constructor(questions) {
    this.questions = questions
  }

  get allQuestions() {
    return Object.values(this.questions)
  }

  async ask() {
    for (let question of this.allQuestions) {
      return await inquisitor.question(question)
    }      
  }
}

export default (questions) => {
  return new Inquiry(questions)
}
