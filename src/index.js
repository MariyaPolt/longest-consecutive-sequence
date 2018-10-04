module.exports = function longestConsecutiveLength(array) {
  const set = new Set();
  for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }

  let max = 0;

  for (let i = 0; i < array.length; i++) {
    let count = 1;
    let left = array[i] - 1;
    let right = array[i] + 1;

    while (set.delete(left)) {
      count++;
      left--;
    }

    while (set.delete(right)) {
      count++;
      right++;
    }

    max = Math.max(max, count);
  }

  return max;
}
