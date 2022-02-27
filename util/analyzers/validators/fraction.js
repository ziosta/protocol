const { isMock } = require('./mock')

const validate = async (code, _, name) => {
  if (isMock(name)) {
    return null
  }

  if (code.toLowerCase().indexOf('div(') > -1 && code.toLowerCase().indexOf('@suppress-division') === -1) {
    return '\x1b[31m' + '* Warning: Please ensure the division(s) here does not end up producing zero values.' + '\x1b[0m'
  }

  if (code.toLowerCase().indexOf(' / ') > -1 && code.toLowerCase().indexOf('@suppress-division') === -1) {
    return '\x1b[31m' + '* Warning: Please ensure the division(s) here does not end up producing zero values.' + '\x1b[0m'
  }

  return null
}

module.exports = validate
