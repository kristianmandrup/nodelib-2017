import validator from './validator'

class Resolver {
  constructor(value, ctx) {
    this.value = value
    this.ctx = ctx
    this.validator = validator(value)
  }

  resolve() {
    switch (this.validator.type) {
      case ':question':
        this.questions = [value]
        return this
      case ':questions':
        this.questions = this.value
        return this
      default:
        return this.resolveFunction() || this.resolveObjs() 
    }  
  }

  resolveObjs() {
    if (typeof value !== 'object') return
    this.questionObjs = value
    return this   
  }

  resolveError() {
    throw `Unable to resolve: ${this.value}`
  }

  resolveFunction() {
    if (typeof this.value !== 'function') return
    let fun = this.value 
    this.value = fun(this.ctx);
    return this.resolve()
  }
}  

export default (value, ctx) => {
  return new Resolver(value, ctx)
}