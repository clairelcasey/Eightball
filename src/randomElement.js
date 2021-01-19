
/** Given an array, return a random element from that array. */

 function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default randomElement;