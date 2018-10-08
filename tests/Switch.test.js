import React from 'react'
import expect from 'expect'
import { Switch, Case } from '../src'
import { render, unmountComponentAtNode } from 'react-dom'

describe('Switch', () => {
  const Age = ({ age }) => (
    <Switch>
      <Case when={age >= 0 && age < 2}>
        User is a baby
      </Case>
      <Case when={age < 12}>
        User is a child
      </Case>
      <Case when={age < 18}>
        User is a teenager
      </Case>
      <Case when={age > 70}>
        User is too old
      </Case>
      <Case as='p'>
        {() => 'User is of age'}
      </Case>
    </Switch>
  )

  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('should only render `User is a baby`', () => (
    render(<Age age={0} />, node, () => {
      expect(node.innerHTML).toEqual('User is a baby')
    })
  ))

  it('should only render `User is a child`', () => (
    render(<Age age={6} />, node, () => {
      expect(node.innerHTML).toEqual('User is a child')
    })
  ))

  it('should only render `User is a teenager`', () => (
    render(<Age age={15} />, node, () => {
      expect(node.innerHTML).toEqual('User is a teenager')
    })
  ))

  it('should only render `User is of age`', () => (
    render(<Age age={18} />, node, () => {
      const child = node.children[0]
      expect(child.tagName === 'p')
      expect(child.innerHTML).toEqual('User is of age')
    })
  ))

  it('should only render `User is of age`', () => (
    render(<Age age={50} />, node, () => {
      const child = node.children[0]
      expect(child.tagName === 'p')
      expect(child.innerHTML).toEqual('User is of age')
    })
  ))

  it('should only render `User is too old`', () => (
    render(<Age age={80} />, node, () => {
      expect(node.innerHTML).toEqual('User is too old')
    })
  ))

  it('should not match anything', () => {
    const el = (
      <Switch>
        <Case when={false}>
          Should not be rendered
        </Case>
        <Case when={''}>
          Should not be rendered either
        </Case>
      </Switch>
    )

    render(el, node, () => {
      expect(node.children.length).toEqual(0)
      expect(node.innerHTML).toEqual('')
    })
  })
})
