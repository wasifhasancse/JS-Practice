// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

let i = 1;
while (i <= 40) {
    // i++; solution to solve infinite loop
    if (i % 2 !== 0) {
        continue; // skip odd numbers, go to next iteration & avoid increment in loop. so creating infinite loop
    }
    console.log('even number is: ', i);
    i++; 
}
