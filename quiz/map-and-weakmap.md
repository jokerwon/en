**Interviewer**: Alright, let's talk about the differences between `Map` and `WeakMap`. First off, can you briefly summarize what a `Map` is?

**Interviewee**: A `Map` is a set of key - value pairs. It's like an object, but in a normal object, keys are usually just strings. In a `Map`, keys can be of any type. It's like a more complete Hash structure. And it's actually in the form of an array of arrays. For example, `const map = [["name","张三"],["age",18]]`. It has methods like `size` to get the number of members, `set` to set key - value pairs, `get` to get the value by key, `has` to check if a key exists, `delete` to remove a key, and `clear` to clear all members. It also has ways to traverse, like `keys()`, `values()`, `entries()`, and `forEach()`.

------

**Interviewer**: Good. Now, what about `WeakMap`? How is it different from `Map`?

**Interviewee**: `WeakMap` is also a set of key - value pairs. But the keys in `WeakMap` must be objects. Primitive data types can't be keys. The values can be anything. It has similar methods like `set`, `get`, `has`, and `delete`, but its `clear` method is deprecated. The main difference is that the keys in `WeakMap` are weakly referenced. The garbage collection mechanism doesn't consider these references. So, when there are no other references to the object used as a key, the key - value pair in `WeakMap` will disappear automatically. In `Map`, keys can be of any type, while in `WeakMap`, keys are restricted to objects (except null).

------

**Interviewer**: Interesting. Can you give an example where using `WeakMap` would be more appropriate than `Map`?

**Interviewee**: Suppose we have some data that we want to associate with DOM elements. If we use a `Map` with DOM elements as keys, it will create a strong reference. Even if the DOM element is removed from the DOM tree, it won't be garbage - collected because the `Map` still references it. But with a `WeakMap`, since the keys are weakly referenced, when the DOM element is removed from the DOM and there are no other strong references to it, the key - value pair in the `WeakMap` related to that DOM element will be garbage - collected. So, in this case, `WeakMap` is more suitable.

------

**Interviewer**: Great. Now, if I have a `Map` and a `WeakMap`, and I want to check if a key exists in both, what methods would I use and are there any differences in how they work?
**Interviewee**: For both `Map` and `WeakMap`, you can use the `has(key)` method to check if a key exists. But in a `Map`, you can use any type of key for this check. In a `WeakMap`, the key must be an object. Also, because `WeakMap` keys are weakly referenced, the object used as a key might be garbage - collected between the time you add it and the time you check with `has()`. So, you need to be aware that the result might be affected by the garbage collection process.