const validate = (value, _default, { except = [], include = ['*'] } = {}) => {
  if (value !== undefined && !except.includes(value) && (include.includes('*') || include.includes(value))) {
    return value
  }
  return _default
}

module.exports = validate

