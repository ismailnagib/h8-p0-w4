function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
    
    if (shoppers.length > 0) {
        var listShopper = [[], [], []];
        var leftOver = [listBarang[0][2], listBarang[1][2], listBarang[2][2]];
        for (var i = 0; i < shoppers.length; i++) {
            if(shoppers[i].product === listBarang[0][0]) {
                if (leftOver[0] >= shoppers[i].amount) {
                    listShopper[0].push(shoppers[i].name);
                    leftOver[0] -= shoppers[i].amount;
                }
            } else if(shoppers[i].product === listBarang[1][0]) {
                if (leftOver[1] >= shoppers[i].amount) {
                    listShopper[1].push(shoppers[i].name);
                    leftOver[1] -= shoppers[i].amount;
                }
            } else if(shoppers[i].product === listBarang[2][0]) {
                if (leftOver[2] >= shoppers[i].amount) {
                    listShopper[2].push(shoppers[i].name);
                    leftOver[2] -= shoppers[i].amount;
                }
            }
        }
        
        var output = [{}, {}, {}];
        for (var j = 0; j < output.length; j++) {
            output[j].product = listBarang[j][0];
            output[j].shoppers = listShopper[j];
            output[j].leftOver = leftOver[j];
            output[j].totalProfit = (listBarang[j][2] - leftOver[j]) * listBarang[j][1];
        }
        return output;
    } else {
        return [];
    }
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]