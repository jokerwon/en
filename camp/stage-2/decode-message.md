# Decode Message

## Question

> Refer [decode message](https://bigfrontend.dev/problem/decode-message)

Your are given a 2-D array of characters. There is a hidden message in it.

```
I B C A L K A
D R F C A E A
G H O E L A D
```

The way to collect the message is as follows

1. start at top left
2. move diagonally down right
3. when cannot move any more, try to switch to diagonally up right
4. when cannot move any more, try switch to diagonally down right, repeat 3
5. stop when cannot neither move down right or up right. the character on the path is the message
   for the input above, IROCLED should be returned.

> [!NOTE]
>
> If no characters could be collected, return empty string

> [!TIP]
>
> [diagonally]() /daɪˈæɡənəli/ _adv_. 对角地, in a diagonal manner

## Sample Answer

```js
function collectMessage(matrix) {
  if (!matrix.length || !matrix[0].length) return ''

  let rows = matrix.length
  let cols = matrix[0].length

  let row = 0
  let col = 0
  let directionDown = true
  let result = ''

  while (col < cols && row >= 0 && row < rows) {
    result += matrix[row][col]

    if (directionDown) {
      if (row + 1 < rows && col + 1 < cols) {
        row++
        col++
      } else {
        directionDown = false
        if (col + 1 < cols) col++
        else break
      }
    } else {
      if (row - 1 >= 0 && col + 1 < cols) {
        row--
        col++
      } else {
        directionDown = true
        if (col + 1 < cols) col++
        else break
      }
    }
  }

  return result
}
```

## My Try

```js
/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  let result = ''
  let h = message.length
  let w = h ? message[0].length : 0
  let i = 0
  let j = 0
  let direction = 'dr'
  while (i < w) {
    result += message[j][i]
    i++
    if (j >= h - 1) direction = 'ur'
    else if (j <= 0) direction = 'dr'
    if (direction === 'dr') j++
    else j--
  }
  return result
}
```
