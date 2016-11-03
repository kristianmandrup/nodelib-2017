import Base from './base'

class ObjList extends Base {
  // can be either Object or Array
  constructor(q, ctx) {   
    super(q, ctx)
    this.categories = q
  }

  // iterate and resolve
  // we can build up nested hierarchy this way
  async ask() {
    for (let name of categories) {
      let ctx = this.ctx[name]
      let value = categories[name]
      let result = await dispatch(value, ctx)
      this.ctx[name] = result 
    }
    return this.ctx 
  }
}

const list = (categoriesObj) => {
  return new ObjList(categoriesObj).ensureValid()
}

export default list 
    