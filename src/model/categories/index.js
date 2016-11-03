const categories = [
  'analysis',
  'bundler',
  'compiler',
  'coverage',
  'documentation',
  'lint',
  'style',
  'test',
  'types',
]

const index = categories.reduce((obj, category) => {
  obj[category] = require('./' + category)
  return obj
}, {})

class Categorizer {
  constructor(name) {
    this.name = name
    this.index = index
  }
}

const categorize = (name) => {
  return new Categorizer(name)
}