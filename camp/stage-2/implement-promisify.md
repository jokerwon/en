# Implement promisify()

## Question

> Refer [Implement promisify()](https://bigfrontend.dev/problem/promisify)

Let's take a look at following error-first callback.

```js
const callback = (error, data) => {
  if (error) {
    // handle the error
  } else {
    // handle the data
  }
}
```

Now think about async functions that takes above error-first callback as last argument.

```js
const func = (arg1, arg2, callback) => {
  // some async logic
  if (hasError) {
    callback(someError)
  } else {
    callback(null, someData)
  }
}
```

You see what needs to be done now. Please implement promisify() to make the code better.

```js
const promisedFunc = promisify(func)
promisedFunc()
  .then((data) => {
    // handles data
  })
  .catch((error) => {
    // handles error
  })
```

## Analysis

The given problem describes an error-first callback pattern commonly found in JavaScript:

```js
callback(error, data)
```

In this pattern:

- If an error occurs, the error argument is populated with the error object, and data is usually null or undefined.
- If no error occurs, error is null, and data contains the intended result.

There are some issues:

- using callbacks extensively often leads to "callback hell"
- error handling becomes cumbersome due to repetitive checks

> [!TIP]
>
> [populate](https://dict.youdao.com/result?word=populate&lang=en) /ˈpɑːpjuleɪt/ _v_. 居住于；充满；（给文件）输入数据
>
> [extensively](https://dict.youdao.com/result?word=extensively&lang=en) /ɪkˈstensɪvli/ _adv_. in a widespread way

##### Why Use promisify()?

Converting traditional callbacks into Promises offers significant benefits:

- Cleaner and more readable code.
- Easier error handling with `.catch()`.
- Seamless integration with modern `async/await` syntax.

##### Key Points to Implement promisify()

A proper promisify() implementation must:

- Return a new function that wraps the original callback-based function.
- Pass a new callback internally to the original function.
- Resolve the Promise with data if successful or reject with the error if failed.

## My Try

```js
/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}
```
