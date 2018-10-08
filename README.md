# react-case-when

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

`react-case-when` is a small module that provides two simple components
to simplify conditional rendering in React.

## Installation

`npm install react-case-when --save`

`yarn add react-case-when`

## Getting Started

They work similar to `switch/case` statements:

```js
import { Switch, Case } from 'react-case-when'

function UserAge ({ age })  {
  // When `Case` is wrapped by a Switch,
  // only the first case that matches is rendered:
  return (
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
      <Case>
        /* Lazy evaluation is also supported */
        {() => <Message>User is of age</Message>}
      </Case>
    </Switch>
  )
}
```

You can use `Case` independently of Switch:

```js
import { Case } from 'react-case-when'

function SomeComponent ({ user })  {
  return (
    <div>
      ...
      <Case when={user.isAdmin()}>
        <RestrictedContent />
      </Case>
    </div>
  )
}
```

## API

The module only exports two components:

- [Case](#case-)
- [Switch](#switch-)

### `<Case />`

It will only render if `when` prop is true or null/undefined.
Otherwise, it won't render anything.

```js
<Case>
  It will always render because `when` is undefined
</Case>
<Case when={false}>
  Will NOT render
</Case>
<Case when='test'>
  Will NOT render
</Case>
<Case when={'test'.length > 0}>
  Will render because when is true
</Case>
```

#### Lazy evaluation

For lazy evaluation, you can pass a function to the children prop:

```js
<Case>
  {() => <SomeComponent />}
</Case>
```

#### Props

| Name    | Default Value  | Description             |
|---------|----------------|-------------------------|
| when    | null           | Renders if it is true or null/undefined |                |
| as      | React.Fragment | what Case will render as      |


### `<Switch />`

You can use the Switch component to wrap a group of Cases
to ensure that only the first one that matches is rendered.

```js
<Switch>
  <Case when={status === 'ACTIVE'} as='p'>
     Status is ACTIVE
  </Case>
  <Case when={status === 'CLOSED'} as='p'>
     Status is CLOSED
  </Case>
  <Case as='p'>
     Status is neither active or closed
  </Case>
</Switch>
```

## Tests

You have to install all dependencies, then just run: `npm test`

## License

MIT

[build-badge]: https://img.shields.io/travis/gsantiago/react-case-when/master.png?style=flat-square
[build]: https://travis-ci.org/gsantiago/react-case-when

[npm-badge]: https://img.shields.io/npm/v/react-case-when.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-case-when

[coveralls-badge]: https://img.shields.io/coveralls/gsantiago/react-case-when/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/gsantiago/react-case-when
