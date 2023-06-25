const _ = require('lodash');

const number = [1, [2, [3 ,[4]]]];

const flatnum = _.flattenDeep(number);

console.log(flatnum);