function getTypeStats(arr) {
  let stats = {};

  arr.forEach((elem) => {
    const type = elem.Type;
    if (stats[type]) {
      stats[type]++;
    } else {
      stats[type] = 1;
    }
  });

  console.log(stats);

  return stats;
}

// let chart = null;
// function drawStats(arr, target) {
//   if (chart) {
//     chart.destroy();
//   }

//   const ctx = document.getElementById(target);

//   let data = getTypeStats(arr);

//   chart = new Chart(ctx, {
//     type: "pie",
//     data: {
//       labels: [...Object.keys(data)],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [...Object.values(data)],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {},
//   });
// }
