import { compareTopping } from "./compareTopping";

const sameArraysMockData = {
  array1: [{
    name: 'Test1',
    price: 99
  },
  {
    name: 'Test2',
    price: 33
  }],
  array2: [{
    name: 'Test1',
    price: 99
  },
  {
    name: 'Test2',
    price: 33
  }]
}

const differentArraysMockData = {
  array1: [{
    name: 'Test3',
    price: 11
  },
  {
    name: 'Test1',
    price: 33
  }],
  array2: [{
    name: 'Test5',
    price: 34
  },
  {
    name: 'Test10',
    price: 35
  }]
}

describe('Compare topping', () => {
  it('should return true if both arrays are empty', () => {
    expect(compareTopping([], [])).toBe(true);
  })
  it('should return false if one of the arrays are empty', () => {
    expect(compareTopping(sameArraysMockData.array1, [])).toBe(false);
  });
  it('should return true if both arrays are the same', () => {
    expect(compareTopping(sameArraysMockData.array1, sameArraysMockData.array2)).toBe(true);
  });
  it('should return false if both arrays are not the same', () => {
    expect(compareTopping(differentArraysMockData.array1, differentArraysMockData.array2)).toBe(false);
  })
})