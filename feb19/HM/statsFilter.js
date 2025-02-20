function statsFilter(arr) {
  // types
  let categories = []; //check the types
  let typeCounts = [];
  let typeFrequency = {};

  arr.forEach((joke) => {
    const type = joke.type;
    typeCounts.push(type);
    if (!categories.includes(type)) {
      categories.push(type);
    }
  });

  arr.forEach((joke) => {
    typeFrequency[joke.type] = (typeFrequency[joke.type] || 0) + 1;
  });
  // display the types

  // total count
  const totalJokes = arr.length;

  // need to draw it
  console.log(totalJokes);
  // console.log(categories);
  // console.log(typeCounts);
  console.log(typeFrequency);
}
