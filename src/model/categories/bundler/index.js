import questions from './questions'
import modules from './modules'
import info from './info'

export default {
  category: 'bundler',
  questions,
  info,  
  modules
}

export default {
  questions: require('./questions'),
  modules: {
    dev: ['rollup', 'webpack']
  } 
}
