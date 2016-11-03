import validator from './validator'

class Resolver {
  constructor(value, ctx) {
    this.value = value
    this.ctx = ctx
    this.validator = validator(value)
  }

  resolve() {
    let v = this.value
    switch (this.validator.type) {
      case ':question':
        this.questions = [v]
        return this
      case ':questions':
        this.questions = v
        return this
      default:
        return this.resolveFunction() || this.resolveObjs() 
    }  
  }

  resolveObjs() {
    let v = this.value
    if (typeof q !== 'object') return
    let q = v.questions || v.default
    if (q) {       
      return resolve(q, this.ctx)
    }
    this.questionObjs = v
    return this   
  }

  resolveError() {
    throw `Unable to resolve: ${this.value}`
  }

  resolveFunction() {
    let v = this.value
    if (typeof v !== 'function') return
    let fun = v 
    this.value = fun(this.ctx);
    return this.resolve()
  }
}  

const resolve = (value, ctx) => {
  return new Resolver(value, ctx)
}

export default