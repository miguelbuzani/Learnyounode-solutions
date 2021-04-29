array = process.argv;
sum = 0;

for (let index = 2; index < array.length; index++) {
    sum += Number(array[index]) || 0;
};

console.log(sum);