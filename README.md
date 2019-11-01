# var-validate
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![Actions Status](https://github.com/RafaelGSS/var-validate/.github/workflows/action.yml/badge.svg)](https://github.com/RafaelGSS/var-validate/actions)

Just validate some things. :star:

## Install

```sh
npm i --save var-validate
```

## Tests
```sh
npm install
npm test
```

## Usage

```js
const validate = require('var-validate')

const inputValid = 'CAR'
validate(inputValid, 'DEFAULT') // CAR

const inputInvalid = undefined
validate(inputInvalid, 'DEFAULT') // DEFAULT

const inputEnum = 'BIKE'
validate(inputEnum, 'DEFAULT') // BIKE
validate(inputEnum, 'DEFAULT', { includes: ['CAR', 'AUTO'] }) // DEFAULT
validate(inputEnum, 'DEFAULT', { includes: ['CAR', 'AUTO', 'BIKE'] }) // BIKE

const inputExcept = 'CAR'
validate(inputExcept, 'DEFAULT', { except: ['BIKE'] }) // CAR
validate(inputExcept, 'DEFAULT', { except: ['BIKE', 'CAR'] }) // DEFAULT
```

## License

MIT