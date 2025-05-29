# Virtual DOM II - createElement

## Question

> Refer [Virtual DOM II - createElement](https://bigfrontend.dev/problem/virtual-dom-II-createElement)

You are asked to create your own `createElement()` and `render()`, so that following code could create the exact HTMLElement in [113. Virtual DOM I](https://bigfrontend.dev/problem/Virtual-DOM-I).

```js
const h = createElement;
render(h(
  'div',
  {},
  h('h1', {}, ' this is '),
  h(
    'p',
    { className: 'paragraph' },
    ' a ',
    h('button', {}, ' button '),
    ' from ',
    h('a', 
      { href: 'https://bfe.dev' }, 
      h('b', {}, 'BFE'),
      '.dev')
  )
))
```

> [!NOTE]
> 1. The goal of this problem is not to create the replica of React implementation, you can have your own object representation format other than the one in 113. Virtual DOM I.
>
> 2. Details about ref, key are ignored here, they will be put in other problems. Re-render is not covered here, it will be in another problem as well.


## Analysis

`createElement`
- Receives a type, props, and multiple children (...children).
- Returns a simplified virtual DOM object representation.

`render`
- If the node is a text node (string), it creates a TextNode.
- If the node is an element, it creates an HTMLElement.
- Recursively handles children.

## Sample Answer

```js
// createElement function similar to React.createElement
function createElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.flat()
  }
}

// render function converts virtual DOM elements to real DOM
function render(vNode) {
  // If vNode is a string, create a text node
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }

  // Create an element
  const $el = document.createElement(vNode.type)

  // Set props
  for (const [key, value] of Object.entries(vNode.props)) {
    // Handle special cases like className
    if (key === 'className') {
      $el.setAttribute('class', value)
    } else {
      $el.setAttribute(key, value)
    }
  }

  // Append children recursively
  vNode.children.map(render).forEach(child => $el.appendChild(child))

  return $el
}

// Usage example provided
const h = createElement

document.body.appendChild(render(
  h('div', {},
    h('h1', {}, ' this is '),
    h('p', { className: 'paragraph' },
      ' a ',
      h('button', {}, ' button '),
      ' from ',
      h('a', { href: 'https://bfe.dev' }, 
        h('b', {}, 'BFE'),
        '.dev'
      )
    )
  )
))
```

## My Try

```js
/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: props.children || children
  }
}


/**
 * @param { MyElement }
 * @returns { HTMLElement } 
 */
function render(myElement) {
  if (typeof myElement === 'string') {
    return document.createTextNode(myElement)
  }
  const { type, props, children } = myElement
  const $el = document.createElement(type)
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'className') {
      $el.setAttribute('class', v)
    } else {
      $el.setAttribute(k, v)
    }
  })

  children.map(render).forEach(c => $el.appendChild(c))
  return $el
}
```
