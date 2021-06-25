interface ToppingItem {
  name: string;
  price: number;
}


export const compareTopping = (array1: ToppingItem[], array2: ToppingItem[]): boolean => {

  if (!array1.length && !array2.length) return true;
  if (!array1.length || !array2.length) return false;

  const sortByName = (array: ToppingItem[]) => {
    return array.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  const array1Sorted = sortByName(array1.slice());
  const array2Sorted = sortByName(array2.slice());
  return array1.length === array2.length && array1Sorted.every((value, index) => {
    return value.name === array2Sorted[index].name;
  });
}