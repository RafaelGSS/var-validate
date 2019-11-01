const { test } = require('tap')
const validate = require('./')

test('should test validation types', t => {
  t.plan(4)
  t.type(validate, 'function', 'check validate is a function')
  t.type(validate(undefined, 'string'), 'string', 'should return string type (string)')
  t.type(validate(undefined, 0), 'number', 'should return number type (0)')
  t.type(validate([], null), 'object', 'array empty should be true')
})

test('should test default values', t => {
  t.plan(6)
  t.strictEqual(validate(undefined, 'str'), 'str', 'should return str string')
  t.strictEqual(validate(undefined, 0), 0, 'should return 0 number')
  t.same(validate(undefined, []), [], 'should return empty array')
  t.same(validate(undefined, [1]), [1], 'should return array with item')
  const funcValidated = validate(undefined, () => 1)

  t.type(funcValidated, 'function', 'should return a valid function')
  t.strictEqual(funcValidated(), 1)
})


test('should test excepts values', t => {
  t.plan(4)
  t.strictEqual(validate('not-pass', 'str', { except: ['not-pass'] }), 'str', 'must return default value')
  t.strictEqual(validate('pass', 'str', { except: ['not-pass', 'another string', 1] }), 'pass', 'must return correct value')
  t.strictEqual(validate(1, 'str', { except: ['not-pass', 1] }), 'str', 'must return default value')
  t.strictEqual(validate(2, 'str', { except: ['not-pass', 1] }), 2, 'must return correct value')
})

test('should test include values', t => {
  t.plan(4)
  t.strictEqual(validate('not-pass', 'str', { include: ['pass'] }), 'str', 'must return default value')
  t.strictEqual(validate('pass', 'str', { include: ['pass', 'another string', 1] }), 'pass', 'must return correct value')
  t.strictEqual(validate(1, 'str', { include: ['not-pass'] }), 'str', 'must return default value')
  t.strictEqual(validate(2, 'str', { include: [1, 2, 3] }), 2, 'must return correct value')
})

// TODO: test except with include
// TODO: test throw if except or include is not array