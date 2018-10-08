import React from 'react'
import match from './match'

function Switch ({ children }) {
  let matched = null

  React.Children.forEach(children, child => {
    const condition = !matched &&
      React.isValidElement(child) &&
      match(child.props.when)

    if (condition) {
      matched = child
    }
  })

  return matched
    ? React.cloneElement(matched, null, matched.props.children)
    : matched
}

export default Switch
