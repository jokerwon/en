**Interviewer**: Hey, can you start by explaining what async/await is in your own words?

**Interviewee**: Sure. Async/await is like a kind of syntax sugar for Promise. It was made to make the then chain easier to work with. The word "async" means the function is asynchronous, and "await" is used to wait for an asynchronous operation to finish. But you can only use "await" inside an "async" function. An async function always returns a Promise object. Whether it's a normal function statement, a function expression, or a Lambda expression, if you return a regular value from an async function, it gets wrapped in `Promise.resolve()` to turn it into a Promise object.

------

**Interviewer**: Okay, so what if an async function doesn't return an explicit value? What does it return then?

**Interviewee**: If an async function doesn't return a value, it'll return `Promise.resolve(undefined)`. Because no matter what, an async function has to return a Promise object, and if there's no value to return, it just resolves with `undefined`.

------

**Interviewer**: Let's say I can't use await at the outermost level to get the return value of an async function. How should I handle it?

**Interviewee**: In that case, you should use the traditional way of handling a Promise object, which is by using the `then()` chain. For example, if you have an async function like `async function testAsy() { return 'hello world' }`, you can call it like `let result = testAsy();` and then use `result.then(v => { console.log(v) })` to get the value that the async function returns.

------

**Interviewer**: Why was async/await developed? What problem does it solve?

**Interviewee**: It was developed to optimize the then chain. When you have multiple asynchronous operations in sequence using Promises, the then chain can get really long and hard to read. Async/await makes the code look more like synchronous code, which is easier to understand and maintain. It keeps the non - blocking nature of Promises but makes the code structure more straightforward. For example, instead of chaining multiple `then()` calls, you can use `await` to wait for each Promise to resolve in a more linear - looking way.

------

**Interviewer**: What are the restrictions when using async/await?

**Interviewee**: The main restriction is that `await` can only be used inside an `async` function. If you try to use it outside, you'll get a syntax error. Also, if you forget to handle rejections properly in an async function, the error might be swallowed and not be as easy to debug as in a normal `try - catch` block for synchronous code.
