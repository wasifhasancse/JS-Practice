// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

let i = 1;
while (i <= 40) {
    if (i % 2 !== 0) {
        continue
    }
    console.log('even number is: ',i);
    i++;
}
