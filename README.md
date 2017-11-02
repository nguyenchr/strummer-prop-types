# Strummer Prop Types

> Use strummer schemas as react prop types

[![NPM](http://img.shields.io/npm/v/strummer-prop-types.svg?style=flat-square)](https://npmjs.org/package/strummer-prop-types)
[![License](http://img.shields.io/npm/l/strummer-prop-types.svg?style=flat-square)](https://github.com/nguyenchr/strummer-prop-types)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)
[![Build Status](https://travis-ci.org/nguyenchr/strummer-prop-types.svg?branch=master)](https://travis-ci.org/nguyenchr/strummer-prop-types)

[![Dependencies](http://img.shields.io/david/nguyenchr/strummer-prop-types.svg?style=flat-square)](https://david-dm.org/nguyenchr/strummer-prop-types)
[![Dev dependencies](http://img.shields.io/david/dev/nguyenchr/strummer-prop-types.svg?style=flat-square)](https://david-dm.org/nguyenchr/strummer-prop-types)

## Why

* Can share custom validators between server and client
* Can do more complex validation out of the box (e.g. min and max length of a string)

## Usage


```js
import { Component } from 'react'
const s = require('strummer')
const sPropTypes = require('strummer-prop-types')

class MyComponent extends Component {
  render () {
    return (
      <div>{this.props.message}</div>
    )
  }
}

MyComponent.propTypes = sPropTypes({
  message: s.string()
})

export default MyComponent
```

or with a HOC

```js
import { Component } from 'react'
const s = require('strummer')
const { WithProps } = require('strummer-prop-types')

class MyComponent extends Component {
  render () {
    return (
      <div>{this.props.message}</div>
    )
  }
}

const schema = {
  message: s.string()
}

export default WithProps(MyComponent, schema)
```

## TODO

Add some tests