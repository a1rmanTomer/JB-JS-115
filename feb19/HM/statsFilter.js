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
  let types = Object.keys(typeFrequency);
  // display the types

  // total count
  const totalJokes = arr.length;

  // need to draw it
  console.log(totalJokes);
  // console.log(categories);
  // console.log(typeCounts);
  //   need to loop through the keys and add the values and append all together to the html
  console.log(typeFrequency);
  console.log(types);
}

function getStatsHTML(arr) {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <p class="font-bold text-lg text-gray-800 mb-2">Total Jokes: <span id="total-jokes" class="text-blue-500">0</span></p>
        </div>
        <div>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Joke Categories</h3>
            <ul id="joke-categories" class="list-disc pl-5 text-gray-700">
            </ul>
        </div>
    </div>
    `;
}
