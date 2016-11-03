const pluginChoices = ['duplicate-keys', 'modules-commonjs', 'syntax-trailing-function-commas', 'async-to-generator', 'transform-exponentiation-operator']

const filters = {  
  _2016_: ['transform-exponentiation-operator'],
  _2017_: ['async-to-generator', 'syntax-trailing-function-commas'] 
}

filters.latest = filters._2016_.concat(filters._2017_) 

export const plugins = (ctx = {}) => {
  console.log('plugins ctx', ctx)
  let filter = filters[ctx.preset] || []
  let choices = pluginChoices.filter(choice => filter.includes(choice)) 

  console.log('choices', choices)
  return {
    name: 'babelPlugins',
    type: 'checkbox',
    message: 'Babel plugins',
    choices: choices,
    default: choices
  }
}
