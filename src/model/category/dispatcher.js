import ask from './ask'
import resolver from './resolver' 

class Dispatcher {
  constructor(value, ctx) {
    this.value = value 
    this.ctx = ctx
    this.resolved = resolver(value, ctx).resolve()
  }

  async ask() { 
    return await this.askList() || this.askObjList() || this.askSingle()
  }

  // must contain questions for prompt
  async askList() {
    let q = this.resolved.questions
    if (!q) return
    return await inquire.list(q, this.ctx).ask()
  }

  async askSingle() {
    let q = this.resolved.question
    if (!q) return
    return await inquire.single(q, this.ctx).ask()
  }

  async askObjList() {
    let q = this.resolved.questionObjs
    if (!q) return
    return await inquire.objList(q, this.ctx).ask()
  }
}

const dispatch = (value) => {
  return new Dispatcher(value, ctx) 
}

export default async (value, ctx) => {
  return await dispatch(value, ctx).ask()
}
