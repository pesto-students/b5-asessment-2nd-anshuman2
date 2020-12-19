// Write your own test cases.

describe('arrayutilities', () => {
  it('myMap() function maps the callback function inside the given array', () => {
    expect([1,2,3].myMap(ele=>ele*2)).toEqual([2,4,6]);
  });

  it('myReduce() function reduces the array to a single countable value', () => {
    expect([4,6,8,10].myReduce((a,b)=>a+b)).toEqual(28);
  });

  it('myFilter() function filters the array using the callback function and returns a new array', () => {
    expect([2,7,2,3].myFilter(ele=>ele%2===0)).toEqual([2,2]);
  });

  it('myForeach() function iterates through the array and computes the value using callback function', () => {
    expect([1,2,3].myForeach(ele=>console.log(ele))).toEqual(1 2 3);
  });
