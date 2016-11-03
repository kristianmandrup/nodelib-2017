import Base from './base'

class List extends Base {
  // must be a question array ready for inquirer.prompt or looping question...
  constructor(q, ctx) {   
    super(q, ctx)
    this.checkValid = this.validator.isQuestionList
    this.prompter = this.inquisitor.prompt
  }
}

export default (questions, ctx) => {
  return new List(questions, ctx).ensureValid()
}
 
    