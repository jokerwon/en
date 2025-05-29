**Interviewer**: Hey, could you start by telling me what the different types of execution contexts in JavaScript are?

**Interviewee**: Sure. There are three main types. First is the global execution context. Anything that's not inside a function runs in the global execution context. It creates a global window object and sets `this` to that global object. There's only one global execution context per program. Then there's the function execution context. Every time a function is called, a new execution context is made for that function. There can be many of these. And the last one is the `eval` function execution context, but it's not commonly used, so we don't really need to focus on it.

------

**Interviewer**: Good. Now, how does the JavaScript engine manage these execution contexts?

**Interviewee**: The JavaScript engine uses the execution context stack. When the engine starts to execute code, it first comes across the global code. It creates a global execution context and pushes it onto the execution stack. Whenever a function call is found, a new execution context for that function is created and pushed to the top of the stack. The engine then runs the function at the top of the stack. After the function finishes, its execution context is popped off the stack, and the engine moves on to the next context. Once all the code is done, the global execution context is popped off too.

------

**Interviewer**: Alright, can you explain the two phases of creating an execution context?

**Interviewee**: Yeah. The first phase is the creation phase. There are three main things happening here. First is `this` binding. In the global execution context, `this` points to the global object, like the `window` object. In a function execution context, the value of `this` depends on how the function is called. If it's called with a reference object, `this` is set to that object; otherwise, it's set to the global object or `undefined`. Second, we create the lexical environment components. A lexical environment is like a data structure that maps variable or function names (identifiers) to actual objects or primitive data (variables). It has an environment recorder which stores the location of variable and function declarations and also has a reference to the outer environment so we can access the parent scope. Third, we create a variable environment component. It's also a lexical environment, and its environment record holds the variable declarations in the execution context. The second phase is the execution phase. That's when variables are actually given values and the code is executed.

------

**Interviewer**: Great. Let's say we have a function that calls another function. How does the execution context work in this case?

**Interviewee**: Well, when the outer function is called, a function execution context is created for it and pushed onto the stack. Then, when the inner function is called, a new execution context is created for that inner function and pushed on top of the stack. The engine will execute the inner function first. After it's done, its execution context is popped off the stack, and then the engine continues with the rest of the outer function's execution context. For example, if we have `function outer() { inner(); } function inner() { console.log('Inside inner'); } outer();`, first the global execution context is on the stack. When `outer` is called, its execution context is pushed. Then when `inner` is called, its execution context is pushed on top. After `inner` prints the log, its context is popped, and then the rest of `outer`'s context is processed.
