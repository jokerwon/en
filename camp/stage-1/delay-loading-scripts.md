**Interviewer**: First, could you tell me about the methods for delaying the loading of JavaScript scripts?

**Interviewee**: Sure. One way is to add the `defer` attribute to the `js` script. This makes the script loading synchronized with document parsing, and the script file is executed after the document parsing is done. So, it doesn't block page rendering. Multiple scripts with this attribute should be executed sequentially according to the spec, but some browsers might not follow this strictly. Another way is to add the `async` attribute. It loads the script asynchronously and doesn't block page parsing. But once the script is loaded, it's executed right away, and if the document isn't fully parsed, it could cause a block. Also, the execution order of multiple scripts with `async` is unpredictable and usually not in the code sequence. Then there's the dynamic DOM creation method. You can listen to document loading events, and after the document is loaded, dynamically create script tags to introduce `js` scripts. There's also the `setTimeout` delay method, where you set a timer to delay loading the `js` script files. And finally, you can load the `JS` last by putting the `js` script at the bottom of the document so it loads and executes as late as possible.

------

**Interviewer**: Great. Now, can you explain what array-like objects are and how to convert them into arrays?

**Interviewee**: An array-like object is an object that has a `length` attribute and several index - like attributes. They're similar to arrays, but you can't call array methods directly on them. Examples are `arguments` in functions and some DOM methods. Function parameters can be thought of as array - like objects because they have a `length` attribute showing the number of parameters. To convert them into arrays, there are a few methods. You can call the `slice` method of the array like this: `Array.prototype.slice.call(arrayLike);`. You can also use the `splice` method: `Array.prototype.splice.call(arrayLike, 0);`. Another way is to use `apply` to call the `concat` method: `Array.prototype.concat.apply([], arrayLike);`. And the modern way is to use the `Array.from` method: `Array.from(arrayLike);`

------

**Interviewer**: In what situation would you prefer to use the `defer` attribute over the `async` attribute for script loading?

**Interviewee**: If the order of script execution matters, like when one script depends on another and they need to be executed in sequence, I'd prefer the `defer` attribute. For example, if I have a script that initializes some global variables and another script that uses those variables, I need them to be executed in order. The `defer` attribute ensures that the scripts are executed in the order they're included in the HTML, after the document is parsed. On the other hand, if I don't care about the execution order and just want the scripts to load asynchronously without blocking the page parsing as much as possible, I'd use the `async` attribute. For scripts that are independent of each other and can be executed as soon as they're loaded, `async` is a better choice.

------

**Interviewer**: Let's say you have an array - like object that contains some DOM elements. Which method of converting it to an array would you choose and why?

**Interviewee**: I'd probably choose `Array.from` because it's a more straightforward and modern way. It's designed specifically for converting array - like objects to arrays. Also, it's more concise compared to the other methods that involve using `call` or `apply` with array prototype methods. For example, if I have a `NodeList` (which is an array - like object of DOM elements), `Array.from` can directly convert it to a real array, and it's easier to read and understand the code. And it works well with the new JavaScript features and coding style.
