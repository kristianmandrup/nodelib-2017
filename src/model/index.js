import collector from './category/collector'
import { log } from '../utils'

class Model {
  constructor() {
    this.collector = collector
  }

  async run() {
    await this.collector().collectAll()
  }
}

export default new Model()