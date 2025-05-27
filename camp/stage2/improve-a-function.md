# Improve a function

## Question

~~~js
// Given an input of array, 
// which is made of items with >= 3 properties
let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
] 
// an exclude array made of key value pair
const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'type', v: 'tv'}, 
  ...
] 
function excludeItems(items, excludes) { 
  excludes.forEach(pair => { 
    items = items.filter(item => item[pair.k] === item[pair.v])
  })
 
  return items
}
~~~

1. What does this function `excludeItems` do?
2. Is this function working as expected ?
3. What is the time complexity of this function?
4. How would you optimize it ?

> *note*
>
> we only judge by the result, not the time cost. please submit the best approach you can.

## Analysis

##### 1. What does this function `excludeItems` do?

The function is **intended** to exclude items from `items` that match any `key:value` pair in `excludes`. However, it actually **retains** only the items that match all the specified key-value pairs, which is the **opposite** of the intended behavior.

> [intend](https://dict.youdao.com/result?word=intend&lang=en)  /ɪnˈtend/  v. design or destine
>
> [retain](https://dict.youdao.com/result?word=retain&lang=en)  /rɪˈteɪn/  v. hold within
>
> [opposite](https://dict.youdao.com/result?word=opposite&lang=en)  /ˈɑːpəzɪt/  n. a relation of direct opposition

##### 2. Is this function working as expected?

No.

- The name `excludeItems` and the structure of the `excludes` array **imply** we should remove any item that matches any of the key-value pairs in `excludes`.
- But this function keeps only those items that match all key-value pairs due to repeated `filter()` with `===` condition (logical AND behavior across filters).

> [imply](https://dict.youdao.com/result?word=imply&lang=en)  / ɪmˈplaɪ /  v. express or state indirectly

##### 3. What is the time complexity of this function?

For `n = items.length`, `m = excludes.length`, the time complexity is `O(m*n)`.

##### 4. How would you optimize it ?

~~~js
function excludeItems(items, excludes) {
  // Convert excludes to a Set of stringified keys for fast lookup
  const excludeSet = new Set(excludes.map(e => `${e.k}:${e.v}`));

  return items.filter(item => {
    // Exclude if any (k,v) matches
    return !Object.entries(item).some(([key, val]) => excludeSet.has(`${key}:${val}`));
  });
}
~~~

- We use a `Set` to allow O(1) lookup for key-value exclusion conditions.
- For each item, we check if any of its property matches an exclude pair.
- We exclude the item if any match is found (`some` + `!`).

## My try

~~~js
/**
 * @param {object[]} items
 * @excludes {Array<{k: string, v: any}>} excludes
 */
/**
 * @param {object[]} items
 * @param {Array< {k: string, v: any}>} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  /**
   * @type { Map<string, Set<any>> }
   */
  const map = new Map()
  for (const { k, v } of excludes) {
    if (!map.has(k)) {
      map.set(k, new Set())
    }
    map.get(k).add(v)
  }
  return items.filter(item => Object.keys(item).every(k => !map.has(k) || !map.get(k).has(item[k])))
}
~~~

