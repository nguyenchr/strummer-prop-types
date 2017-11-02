const createProps = (schema) => {
  let propTypeSchema = {}
  for (const [key, value] of Object.entries(schema)) {
    propTypeSchema[key] = (props, propName, componentName) => {
      const errors = value.match(propName, props[propName])
      if (errors.length) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}, ${errors[0].message} was ${props.propName}`)
      }
    }
  }
  return propTypeSchema
}

module.exports = exports = createProps

exports.WithProps = (component, schema) => {
  component.propTypes = createProps(schema)
  return component
}
