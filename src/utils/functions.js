const madeQueueFrom = (array, start, end) => {
  return array.slice(start, end);
};

const decrement = (index) => {
  if (index > 0) {
    return --index;
  }
  return false;
};

const increment = (index, array) => {
  if (index < array.length) {
    return ++index;
  }
  return false;
};

const getArrayOfSizes = (str) => {
  return str.split(", ");
};

export { madeQueueFrom, increment, decrement, getArrayOfSizes };
