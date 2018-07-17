function changeMe(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
      obj[i] = ({});
      obj[i]["firstName"] = arr[i][0];
      obj[i]["lastName"] = arr[i][1];
      obj[i]["gender"] = arr[i][2];
      if (arr[i].length === 4 && arr[i][3] <= 2018) {
        obj[i]["age"] = 2018 - arr[i][3];
      } else {
        obj[i]["age"] = "Invalid Birth Year";
      }
  }
  for (var j = 0; j < Object.keys(obj).length; j++) {
      console.log((j + 1) + ". " + obj[j].firstName + " " + obj[j].lastName + ":");
      console.log(obj[j]);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""