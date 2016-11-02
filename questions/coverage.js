export const defaultReport = (ctx) => {
  return {
    name: 'defaultReport',
    type: 'checkbox',
    message: 'Default coverage report',
    choices: ctx.coverageReports,
    default: ctx.coverageReports[0]
  }
}

export const coverageReports = {
  name: 'coverageReports',
  type: 'checkbox',
  message: 'CI servers',
  choices: ['html', 'text', 'text-lcov', 'lcov'],
  default: ['html', 'lcov']
}

export const coveralls = {
  name: 'coveralls',
  type: 'confirm',
  message: 'Post coverage to coveralls',
  default: false
}