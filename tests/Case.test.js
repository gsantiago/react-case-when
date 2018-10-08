import React from 'react'
import expect from 'expect'
import { Case } from '../src'
import { render, unmountComponentAtNode } from 'react-dom'

describe('Case', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('should render a text fragment', () => {
    const el = (
      <Case>
        Hello
      </Case>
    )

    render(el, node, () => {
      expect(node.innerHTML).toEqual('Hello')
    })
  })

  it('should render a div', () => {
    const el = (
      <Case when={null}>
        {() => (
          <div className='simple-div'>
            a simple div
          </div>
        )}
      </Case>
    )

    render(el, node, () => {
      const simpleDiv = node.querySelector('.simple-div')
      expect(simpleDiv).toBeTruthy()
      expect(simpleDiv.innerHTML).toEqual('a simple div')
    })
  })

  it('should render a p', () => {
    const el = (
      <Case when={!!'string'} as='p' className='simple-text'>
        simple text
      </Case>
    )

    render(el, node, () => {
      const simpleDiv = node.querySelector('.simple-text')
      expect(simpleDiv).toBeTruthy()
      expect(simpleDiv.innerHTML).toEqual('simple text')
    })
  })

  it('should not render anything', () => {
    const el = (
      <React.Fragment>
        <Case when={false}>
          Should not be rendered
        </Case>
        <Case when={''}>
          Should not be rendered
        </Case>
        <Case when={123}>
          Should not be rendered
        </Case>
        <Case when={[]}>
          Should not be rendered
        </Case>
        <Case when={'string'}>
          Should not be rendered
        </Case>
        <Case when={{}}>
          Should not be rendered
        </Case>
      </React.Fragment>
    )

    render(el, node, () => {
      expect(node.children.length).toEqual(0)
      expect(node.innerHTML).toEqual('')
    })
  })
})
