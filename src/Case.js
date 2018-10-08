import React, { Fragment } from 'react'
import match from './match'

function Case ({ when, children, as: Wrap = Fragment, ...props }) {
  if (match(when)) {
    return (
      <Wrap {...props}>
        {children instanceof Function
          ? children()
          : children
        }
      </Wrap>
    )
  }

  return null
}

export default Case
