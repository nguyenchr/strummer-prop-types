# Strummer Prop Types

> Use strummer schemas as react prop types

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

[![Build Status](https://travis-ci.org/nguyenchr/strummer-prop-types.svg?branch=master)](https://travis-ci.org/nguyenchr/strummer-prop-types)

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