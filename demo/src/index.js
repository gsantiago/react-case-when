import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Case } from '../../src'

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: 12
    }
  }

  render () {
    const { age } = this.state

    return (
      <div>
        <p>
          <input
            type='number'
            step={1}
            min={0}
            value={age}
            onChange={e => this.setState({ age: e.target.value })}
          />
        </p>
        <Switch>
          <Case when={age >= 0 && age < 2}>
            <p>User is a baby</p>
          </Case>
          <Case when={age < 12}>
            <p>User is a child</p>
          </Case>
          <Case when={age < 18}>
            User is a teenager
          </Case>
          <Case when={age > 70}>
            User is too old
          </Case>
          <Case>
            <p>User is of age</p>
          </Case>
        </Switch>
      </div>
    )
  }
}

render(
  <Demo />,
  document.querySelector('#demo')
)
