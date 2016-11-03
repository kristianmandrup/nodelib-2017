export default {
  category: 'bundler',
  questions: require('./questions'),
  links: {
    bundler: {
      webpack: {
        site: {label: 'webpack.io', url: 'webpack.io'},
        tutorials: [
          {label: 'getting started with webpack 2', url: 'webpack.io'}
        ],
        npm: [
          'webpack'
        ]
      }
    }
  },
  modules: {
    bundler: {
      dev: ['rollup', 'webpack']
    }
  } 
}
