import Base from './base'

class ObjList extends Base {
  // can be either Object or Array
  constructor(q, ctx) {   
    super(q, ctx)
    this.categories = q
  }

  // iterate and resolve
  async ask() {
    for (let name of categories) {
      let result = await dispatch(name)
      this.ctx[name] = result
    }
    return this.ctx 
  }
}

const list = (categoriesObj) => {
  return new ObjList(categoriesObj).ensureValid()
}

export default list 
    