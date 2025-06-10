# What is Composition? create a pipe()

## Question

> Refer [what is Composition? create a pipe()](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe)

Here you are asked to create a pipe() function, which chains multiple functions together to create a new function.

Suppose we have some simple functions like this

```js
const times = (y) => (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) => (x) => x - y
const divide = (y) => (x) => x / y
```

Your `pipe()` would be used to generate new functions

```js
pipe([times(2), times(3)])
// x * 2 * 3
pipe([times(2), plus(3), times(4)])
// (x * 2 + 3) * 4
pipe([times(2), subtract(3), divide(4)])
// (x * 2 - 3) / 4
```

> [!NOTE]
>
> 1. to make things simple, functions passed to pipe() will all accept 1 argument

## Analysis

The `pipe` function needs to have following characteristics:

- Accepts an array of functions, each taking exactly one argument.
- Returns a new function that applies the provided functions sequentially, from the first function to the last.
- Each function's output becomes the input for the subsequent function.

In summary, the `pipe` function provided above is:

- A concise, readable solution demonstrating the concept of function composition clearly.
- Able to effectively chain multiple single-argument functions into a pipeline.
- Practical and efficient, suitable for both coding interviews and real-world JavaScript applications.

> [!TIP]
>
> [subsequent](https://dict.youdao.com/result?word=subsequent&lang=en) /ˈsʌbsɪkwənt/ _adj_. following in time or order
>
> [readable](https://dict.youdao.com/result?word=readable&lang=en) /ˈriːdəb(ə)l/ _adj_. easily [deciphered](https://dict.youdao.com/result?word=decipher&lang=en)
>
> [demonstrate](https://dict.youdao.com/result?word=demonstrate&lang=en) /ˈdemənstreɪt/ _v_. show or demonstrate something to an interested audience
>
> [practical](https://dict.youdao.com/result?word=practical&lang=en) /ˈpræktɪk(ə)l/ _adj_. having or put to a practical purpose or use; concerned with actual use or practice

## My Try

```js
/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return (arg) =>
    funcs.reduce((input, func) => {
      return func(input)
    }, arg)
}
```
